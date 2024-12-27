import { execSync } from 'child_process';

const PROCESSORS = [
  'berachain-processor',
  'arb-processor',
  'optimism-processor',
  'base-processor',
  'zora-processor',
  'eth-processor'
];

const RETRY_INTERVAL = 60000; // 1 minute
const MAX_RETRIES = 240; // 4 hours total wait time

async function getProcessorStatus(processor: string): Promise<boolean> {
  try {
    const status = execSync(`sqd status ${processor}`, { encoding: 'utf8' });
    // Parse the status output to check if synced
    return status.toLowerCase().includes('100.00%');
  } catch (error) {
    console.error(`Error checking status for ${processor}:`, error);
    return false;
  }
}

async function checkAllProcessors(): Promise<boolean> {
  console.log('Checking processor sync status...');
  
  for (const processor of PROCESSORS) {
    const isSynced = await getProcessorStatus(processor);
    console.log(`${processor}: ${isSynced ? '✅ Synced' : '⏳ Syncing...'}`);
    
    if (!isSynced) {
      return false;
    }
  }
  
  return true;
}

async function setProductionTag(version: string) {
  try {
    execSync(`sqd tags add prod -n quest-squid -s v${version}`, { encoding: 'utf8' });
    console.log(`✅ Successfully set prod tag to version ${version}`);
  } catch (error) {
    console.error('Failed to set production tag:', error);
    process.exit(1);
  }
}

async function main() {
  const version = process.argv[2];
  if (!version) {
    console.error('Please provide a version number');
    process.exit(1);
  }

  console.log(`🚀 Starting sync check for version ${version}`);
  
  let retries = 0;
  while (retries < MAX_RETRIES) {
    if (await checkAllProcessors()) {
      console.log('🎉 All processors are synced!');
      await setProductionTag(version);
      process.exit(0);
    }

    console.log(`\n⏳ Not all processors are synced. Retrying in ${RETRY_INTERVAL/1000} seconds...`);
    retries++;
    await new Promise(resolve => setTimeout(resolve, RETRY_INTERVAL));
  }

  console.error('❌ Timeout: Not all processors synced within the maximum wait time');
  process.exit(1);
}

main().catch(error => {
  console.error('Script failed:', error);
  process.exit(1);
}); 