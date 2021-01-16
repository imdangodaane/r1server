import { Column, Entity } from "typeorm";

@Entity("npc_barter_data", { schema: "hercules" })
export class NpcBarterData {
  @Column("varchar", { primary: true, name: "name", length: 24 })
  name: string;

  @Column("int", {
    primary: true,
    name: "itemId",
    unsigned: true,
    default: () => "'0'",
  })
  itemId: number;

  @Column("int", { name: "amount", unsigned: true, default: () => "'0'" })
  amount: number;

  @Column("int", {
    primary: true,
    name: "priceId",
    unsigned: true,
    default: () => "'0'",
  })
  priceId: number;

  @Column("int", {
    primary: true,
    name: "priceAmount",
    unsigned: true,
    default: () => "'0'",
  })
  priceAmount: number;
}
