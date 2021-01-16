import { Column, Entity } from "typeorm";

@Entity("mob_skill_db", { schema: "hercules" })
export class MobSkillDb {
  @Column("smallint", { name: "MOB_ID" })
  mobId: number;

  @Column("text", { name: "INFO" })
  info: string;

  @Column("text", { name: "STATE" })
  state: string;

  @Column("smallint", { name: "SKILL_ID" })
  skillId: number;

  @Column("tinyint", { name: "SKILL_LV" })
  skillLv: number;

  @Column("smallint", { name: "RATE" })
  rate: number;

  @Column("mediumint", { name: "CASTTIME" })
  casttime: number;

  @Column("int", { name: "DELAY" })
  delay: number;

  @Column("text", { name: "CANCELABLE" })
  cancelable: string;

  @Column("text", { name: "TARGET" })
  target: string;

  @Column("text", { name: "CONDITION" })
  condition: string;

  @Column("text", { name: "CONDITION_VALUE", nullable: true })
  conditionValue: string | null;

  @Column("int", { name: "VAL1", nullable: true })
  val1: number | null;

  @Column("int", { name: "VAL2", nullable: true })
  val2: number | null;

  @Column("int", { name: "VAL3", nullable: true })
  val3: number | null;

  @Column("int", { name: "VAL4", nullable: true })
  val4: number | null;

  @Column("int", { name: "VAL5", nullable: true })
  val5: number | null;

  @Column("text", { name: "EMOTION", nullable: true })
  emotion: string | null;

  @Column("text", { name: "CHAT", nullable: true })
  chat: string | null;
}
