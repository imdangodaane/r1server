import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("account_id", ["accountId"], {})
@Index("char_id", ["charId"], {})
@Entity("atcommandlog", { schema: "hercules" })
export class Atcommandlog {
  @PrimaryGeneratedColumn({
    type: "mediumint",
    name: "atcommand_id",
    unsigned: true,
  })
  atcommandId: number;

  @Column("datetime", { name: "atcommand_date", nullable: true })
  atcommandDate: Date | null;

  @Column("int", { name: "account_id", unsigned: true, default: () => "'0'" })
  accountId: number;

  @Column("int", { name: "char_id", unsigned: true, default: () => "'0'" })
  charId: number;

  @Column("varchar", { name: "char_name", length: 25 })
  charName: string;

  @Column("varchar", { name: "map", length: 11 })
  map: string;

  @Column("varchar", { name: "command", length: 255 })
  command: string;
}
