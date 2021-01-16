import { Column, Entity } from "typeorm";

@Entity("autotrade_merchants", { schema: "hercules" })
export class AutotradeMerchants {
  @Column("int", { primary: true, name: "account_id", default: () => "'0'" })
  accountId: number;

  @Column("int", { primary: true, name: "char_id", default: () => "'0'" })
  charId: number;

  @Column("tinyint", { name: "sex", default: () => "'0'" })
  sex: number;

  @Column("varchar", {
    name: "title",
    length: 80,
    default: () => "'Buy From Me!'",
  })
  title: string;
}
