import { Column, Entity } from "typeorm";

@Entity("npc_expanded_barter_data", { schema: "hercules" })
export class NpcExpandedBarterData {
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
    name: "zeny",
    unsigned: true,
    default: () => "'0'",
  })
  zeny: number;

  @Column("int", {
    primary: true,
    name: "currencyId1",
    unsigned: true,
    default: () => "'0'",
  })
  currencyId1: number;

  @Column("int", {
    primary: true,
    name: "currencyAmount1",
    unsigned: true,
    default: () => "'0'",
  })
  currencyAmount1: number;

  @Column("int", {
    primary: true,
    name: "currencyRefine1",
    default: () => "'0'",
  })
  currencyRefine1: number;

  @Column("int", {
    primary: true,
    name: "currencyId2",
    unsigned: true,
    default: () => "'0'",
  })
  currencyId2: number;

  @Column("int", {
    primary: true,
    name: "currencyAmount2",
    unsigned: true,
    default: () => "'0'",
  })
  currencyAmount2: number;

  @Column("int", {
    primary: true,
    name: "currencyRefine2",
    default: () => "'0'",
  })
  currencyRefine2: number;

  @Column("int", {
    primary: true,
    name: "currencyId3",
    unsigned: true,
    default: () => "'0'",
  })
  currencyId3: number;

  @Column("int", {
    primary: true,
    name: "currencyAmount3",
    unsigned: true,
    default: () => "'0'",
  })
  currencyAmount3: number;

  @Column("int", {
    primary: true,
    name: "currencyRefine3",
    default: () => "'0'",
  })
  currencyRefine3: number;

  @Column("int", {
    primary: true,
    name: "currencyId4",
    unsigned: true,
    default: () => "'0'",
  })
  currencyId4: number;

  @Column("int", {
    primary: true,
    name: "currencyAmount4",
    unsigned: true,
    default: () => "'0'",
  })
  currencyAmount4: number;

  @Column("int", {
    primary: true,
    name: "currencyRefine4",
    default: () => "'0'",
  })
  currencyRefine4: number;

  @Column("int", { name: "currencyId5", unsigned: true, default: () => "'0'" })
  currencyId5: number;

  @Column("int", {
    name: "currencyAmount5",
    unsigned: true,
    default: () => "'0'",
  })
  currencyAmount5: number;

  @Column("int", { name: "currencyRefine5", default: () => "'0'" })
  currencyRefine5: number;

  @Column("int", { name: "currencyId6", unsigned: true, default: () => "'0'" })
  currencyId6: number;

  @Column("int", {
    name: "currencyAmount6",
    unsigned: true,
    default: () => "'0'",
  })
  currencyAmount6: number;

  @Column("int", { name: "currencyRefine6", default: () => "'0'" })
  currencyRefine6: number;

  @Column("int", { name: "currencyId7", unsigned: true, default: () => "'0'" })
  currencyId7: number;

  @Column("int", {
    name: "currencyAmount7",
    unsigned: true,
    default: () => "'0'",
  })
  currencyAmount7: number;

  @Column("int", { name: "currencyRefine7", default: () => "'0'" })
  currencyRefine7: number;

  @Column("int", { name: "currencyId8", unsigned: true, default: () => "'0'" })
  currencyId8: number;

  @Column("int", {
    name: "currencyAmount8",
    unsigned: true,
    default: () => "'0'",
  })
  currencyAmount8: number;

  @Column("int", { name: "currencyRefine8", default: () => "'0'" })
  currencyRefine8: number;

  @Column("int", { name: "currencyId9", unsigned: true, default: () => "'0'" })
  currencyId9: number;

  @Column("int", {
    name: "currencyAmount9",
    unsigned: true,
    default: () => "'0'",
  })
  currencyAmount9: number;

  @Column("int", { name: "currencyRefine9", default: () => "'0'" })
  currencyRefine9: number;

  @Column("int", { name: "currencyId10", unsigned: true, default: () => "'0'" })
  currencyId10: number;

  @Column("int", {
    name: "currencyAmount10",
    unsigned: true,
    default: () => "'0'",
  })
  currencyAmount10: number;

  @Column("int", { name: "currencyRefine10", default: () => "'0'" })
  currencyRefine10: number;
}
