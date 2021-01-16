import { Column, Entity } from "typeorm";

@Entity("npc_market_data", { schema: "hercules" })
export class NpcMarketData {
  @Column("varchar", { primary: true, name: "name", length: 24 })
  name: string;

  @Column("int", {
    primary: true,
    name: "itemid",
    unsigned: true,
    default: () => "'0'",
  })
  itemid: number;

  @Column("int", { name: "amount", unsigned: true, default: () => "'0'" })
  amount: number;
}
