import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, IntColumn as IntColumn_, JSONColumn as JSONColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class Mission {
    constructor(props?: Partial<Mission>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @StringColumn_({nullable: false})
    name!: string

    @StringColumn_({nullable: false})
    chain!: string

    @StringColumn_({nullable: false})
    address!: string

    @IntColumn_({nullable: false})
    startTime!: number

    @JSONColumn_({nullable: false})
    startStreak!: unknown

    @JSONColumn_({nullable: false})
    endStreak!: unknown
}
