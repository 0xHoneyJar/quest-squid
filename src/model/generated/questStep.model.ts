import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, IntColumn as IntColumn_, StringColumn as StringColumn_, JSONColumn as JSONColumn_, BigIntColumn as BigIntColumn_, BooleanColumn as BooleanColumn_} from "@subsquid/typeorm-store"
import {Quest} from "./quest.model"

@Entity_()
export class QuestStep {
    constructor(props?: Partial<QuestStep>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Quest, {nullable: true})
    quest!: Quest

    @IntColumn_({nullable: false})
    stepNumber!: number

    @StringColumn_({array: true, nullable: false})
    types!: (string)[]

    @StringColumn_({array: true, nullable: false})
    addresses!: (string)[]

    @JSONColumn_({nullable: true})
    filterCriteria!: unknown | undefined | null

    @BigIntColumn_({nullable: false})
    requiredAmount!: bigint

    @BooleanColumn_({nullable: false})
    includeTransaction!: boolean

    @StringColumn_({nullable: true})
    path!: string | undefined | null
}
