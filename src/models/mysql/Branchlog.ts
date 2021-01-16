import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("account_id", ["accountId"], {})
@Index("char_id", ["charId"], {})
@Entity("branchlog", { schema: "hercules" })
export class Branchlog {
  @PrimaryGeneratedColumn({
    type: "mediumint",
    name: "branch_id",
    unsigned: true,
  })
  branchId: number;

  @Column("datetime", { name: "branch_date", nullable: true })
  branchDate: Date | null;

  @Column("int", { name: "account_id", default: () => "'0'" })
  accountId: number;

  @Column("int", { name: "char_id", default: () => "'0'" })
  charId: number;

  @Column("varchar", { name: "char_name", length: 25 })
  charName: string;

  @Column("varchar", { name: "map", length: 11 })
  map: string;
}
