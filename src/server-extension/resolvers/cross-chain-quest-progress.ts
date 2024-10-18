import { Arg, Field, Int, ObjectType, Query, Resolver } from "type-graphql";
import { type EntityManager } from "typeorm";
import { UserQuestProgress } from "../../model";

@ObjectType()
class CrossChainStepProgress {
  @Field(() => Int)
  stepNumber!: number;

  @Field(() => String)
  progressAmount!: string; // Using string to represent BigInt

  @Field()
  completed!: boolean;

  @Field(() => String)
  startTimestamp!: string; // Using string to represent BigInt

  @Field(() => String, { nullable: true })
  path!: string | null;
}

@ObjectType()
class CrossChainUserQuestProgress {
  @Field()
  address!: string;

  @Field(() => [CrossChainStepProgress])
  stepProgresses!: CrossChainStepProgress[];
}

@Resolver()
export class CrossChainQuestProgressResolver {
  constructor(private tx: () => Promise<EntityManager>) {}

  @Query(() => [CrossChainUserQuestProgress])
  async crossChainQuestProgress(
    @Arg("questName") questName: string,
    @Arg("address", { nullable: true }) address?: string,
    @Arg("limit", () => Int, { nullable: true }) limit?: number,
    @Arg("offset", () => Int, { nullable: true }) offset?: number
  ): Promise<CrossChainUserQuestProgress[]> {
    const manager = await this.tx();

    const whereClause: any = { quest: { name: questName } };
    if (address) {
      whereClause.address = address.toLowerCase();
    }

    const userQuestProgresses = await manager.find(UserQuestProgress, {
      where: whereClause,
      relations: ["stepProgresses"],
      order: { address: "ASC" },
      take: limit,
      skip: offset,
    });

    const result = userQuestProgresses.reduce((acc, uqp) => {
      const existingProgress = acc.find(p => p.address === uqp.address);
      if (existingProgress) {
        existingProgress.stepProgresses.push(...uqp.stepProgresses.map(sp => ({
          stepNumber: sp.stepNumber,
          progressAmount: sp.progressAmount.toString(),
          completed: sp.completed,
          startTimestamp: sp.startTimestamp.toString(),
          path: sp.path ?? null,
        })));
      } else {
        acc.push({
          address: uqp.address,
          stepProgresses: uqp.stepProgresses.map(sp => ({
            stepNumber: sp.stepNumber,
            progressAmount: sp.progressAmount.toString(),
            completed: sp.completed,
            startTimestamp: sp.startTimestamp.toString(),
            path: sp.path ?? null,
          })),
        });
      }
      return acc;
    }, [] as CrossChainUserQuestProgress[]);

    // Sort step progresses for each user
    result.forEach(userProgress => {
      userProgress.stepProgresses.sort((a, b) => a.stepNumber - b.stepNumber);
    });

    return result;
  }
}
