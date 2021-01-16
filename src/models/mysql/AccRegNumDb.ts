import { Column, Entity, Index } from "typeorm";

@Index("account_id", ["accountId"], {})
@Entity("acc_reg_num_db", { schema: "hercules" })
export class AccRegNumDb {
  @Column("int", {
    primary: true,
    name: "account_id",
    unsigned: true,
    default: () => "'0'",
  })
  accountId: number;

  @Column("varchar", { primary: true, name: "key", length: 32 })
  key: string;

  @Column("int", {
    primary: true,
    name: "index",
    unsigned: true,
    default: () => "'0'",
  })
  index: number;

  @Column("int", { name: "value", default: () => "'0'" })
  value: number;
}
