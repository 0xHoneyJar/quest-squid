import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, IntColumn as IntColumn_} from "@subsquid/typeorm-store"
import {UserQuestProgress} from "./userQuestProgress.model"
import {QuestStep} from "./questStep.model"

@Entity_()
export class UserStepProgress {
    constructor(props?: Partial<UserStepProgress>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => UserQuestProgress, {nullable: true})
    userQuestProgress!: UserQuestProgress

    @Index_()
    @ManyToOne_(() => QuestStep, {nullable: true})
    step!: QuestStep

    @IntColumn_({nullable: false})
    progressAmount!: number
}
