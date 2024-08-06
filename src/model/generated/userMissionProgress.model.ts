import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, ManyToOne as ManyToOne_, IntColumn as IntColumn_} from "@subsquid/typeorm-store"
import {Mission} from "./mission.model"

@Entity_()
export class UserMissionProgress {
    constructor(props?: Partial<UserMissionProgress>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @StringColumn_({nullable: false})
    address!: string

    @Index_()
    @ManyToOne_(() => Mission, {nullable: true})
    mission!: Mission

    @IntColumn_({nullable: false})
    lastActivationTimestamp!: number

    @IntColumn_({nullable: false})
    lastStreakUpdateTimestamp!: number

    @IntColumn_({nullable: false})
    currentStreak!: number

    @IntColumn_({nullable: false})
    longestStreak!: number
}
