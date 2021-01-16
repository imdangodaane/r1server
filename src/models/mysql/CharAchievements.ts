import { Column, Entity } from "typeorm";

@Entity("char_achievements", { schema: "hercules" })
export class CharAchievements {
  @Column("int", { primary: true, name: "char_id", unsigned: true })
  charId: number;

  @Column("int", { primary: true, name: "ach_id", unsigned: true })
  achId: number;

  @Column("int", { name: "completed_at", unsigned: true, default: () => "'0'" })
  completedAt: number;

  @Column("int", { name: "rewarded_at", unsigned: true, default: () => "'0'" })
  rewardedAt: number;

  @Column("int", { name: "obj_0", unsigned: true, default: () => "'0'" })
  obj_0: number;

  @Column("int", { name: "obj_1", unsigned: true, default: () => "'0'" })
  obj_1: number;

  @Column("int", { name: "obj_2", unsigned: true, default: () => "'0'" })
  obj_2: number;

  @Column("int", { name: "obj_3", unsigned: true, default: () => "'0'" })
  obj_3: number;

  @Column("int", { name: "obj_4", unsigned: true, default: () => "'0'" })
  obj_4: number;

  @Column("int", { name: "obj_5", unsigned: true, default: () => "'0'" })
  obj_5: number;

  @Column("int", { name: "obj_6", unsigned: true, default: () => "'0'" })
  obj_6: number;

  @Column("int", { name: "obj_7", unsigned: true, default: () => "'0'" })
  obj_7: number;

  @Column("int", { name: "obj_8", unsigned: true, default: () => "'0'" })
  obj_8: number;

  @Column("int", { name: "obj_9", unsigned: true, default: () => "'0'" })
  obj_9: number;
}
