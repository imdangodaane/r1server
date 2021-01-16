import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("account_id", ["accountId"], {})
@Index("char_id", ["charId"], {})
@Entity("npclog", { schema: "hercules" })
export class Npclog {
  @PrimaryGeneratedColumn({ type: "mediumint", name: "npc_id", unsigned: true })
  npcId: number;

  @Column("datetime", { name: "npc_date", nullable: true })
  npcDate: Date | null;

  @Column("int", { name: "account_id", unsigned: true, default: () => "'0'" })
  accountId: number;

  @Column("int", { name: "char_id", unsigned: true, default: () => "'0'" })
  charId: number;

  @Column("varchar", { name: "char_name", length: 25 })
  charName: string;

  @Column("varchar", { name: "map", length: 11 })
  map: string;

  @Column("varchar", { name: "mes", length: 255 })
  mes: string;
}
