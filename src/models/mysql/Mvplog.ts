import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("mvplog", { schema: "hercules" })
export class Mvplog {
  @PrimaryGeneratedColumn({ type: "mediumint", name: "mvp_id", unsigned: true })
  mvpId: number;

  @Column("datetime", { name: "mvp_date", nullable: true })
  mvpDate: Date | null;

  @Column("int", { name: "kill_char_id", default: () => "'0'" })
  killCharId: number;

  @Column("smallint", { name: "monster_id", default: () => "'0'" })
  monsterId: number;

  @Column("int", { name: "prize", default: () => "'0'" })
  prize: number;

  @Column("mediumint", { name: "mvpexp", default: () => "'0'" })
  mvpexp: number;

  @Column("varchar", { name: "map", length: 11 })
  map: string;
}
