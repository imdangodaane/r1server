import { Column, Entity } from "typeorm";

@Entity("autotrade_data", { schema: "hercules" })
export class AutotradeData {
  @Column("int", { primary: true, name: "char_id", default: () => "'0'" })
  charId: number;

  @Column("int", { primary: true, name: "itemkey", default: () => "'0'" })
  itemkey: number;

  @Column("int", { name: "amount", default: () => "'0'" })
  amount: number;

  @Column("int", { name: "price", default: () => "'0'" })
  price: number;
}
