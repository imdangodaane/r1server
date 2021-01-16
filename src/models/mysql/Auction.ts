import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("auction", { schema: "hercules" })
export class Auction {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "auction_id",
    unsigned: true,
  })
  auctionId: string;

  @Column("int", { name: "seller_id", unsigned: true, default: () => "'0'" })
  sellerId: number;

  @Column("varchar", { name: "seller_name", length: 30 })
  sellerName: string;

  @Column("int", { name: "buyer_id", unsigned: true, default: () => "'0'" })
  buyerId: number;

  @Column("varchar", { name: "buyer_name", length: 30 })
  buyerName: string;

  @Column("int", { name: "price", unsigned: true, default: () => "'0'" })
  price: number;

  @Column("int", { name: "buynow", unsigned: true, default: () => "'0'" })
  buynow: number;

  @Column("smallint", { name: "hours", default: () => "'0'" })
  hours: number;

  @Column("int", { name: "timestamp", unsigned: true, default: () => "'0'" })
  timestamp: number;

  @Column("int", { name: "nameid", unsigned: true, default: () => "'0'" })
  nameid: number;

  @Column("varchar", { name: "item_name", length: 50 })
  itemName: string;

  @Column("smallint", { name: "type", default: () => "'0'" })
  type: number;

  @Column("tinyint", { name: "refine", unsigned: true, default: () => "'0'" })
  refine: number;

  @Column("tinyint", {
    name: "attribute",
    unsigned: true,
    default: () => "'0'",
  })
  attribute: number;

  @Column("int", { name: "card0", default: () => "'0'" })
  card0: number;

  @Column("int", { name: "card1", default: () => "'0'" })
  card1: number;

  @Column("int", { name: "card2", default: () => "'0'" })
  card2: number;

  @Column("int", { name: "card3", default: () => "'0'" })
  card3: number;

  @Column("smallint", {
    name: "opt_idx0",
    unsigned: true,
    default: () => "'0'",
  })
  optIdx0: number;

  @Column("smallint", { name: "opt_val0", default: () => "'0'" })
  optVal0: number;

  @Column("smallint", {
    name: "opt_idx1",
    unsigned: true,
    default: () => "'0'",
  })
  optIdx1: number;

  @Column("smallint", { name: "opt_val1", default: () => "'0'" })
  optVal1: number;

  @Column("smallint", {
    name: "opt_idx2",
    unsigned: true,
    default: () => "'0'",
  })
  optIdx2: number;

  @Column("smallint", { name: "opt_val2", default: () => "'0'" })
  optVal2: number;

  @Column("smallint", {
    name: "opt_idx3",
    unsigned: true,
    default: () => "'0'",
  })
  optIdx3: number;

  @Column("smallint", { name: "opt_val3", default: () => "'0'" })
  optVal3: number;

  @Column("smallint", {
    name: "opt_idx4",
    unsigned: true,
    default: () => "'0'",
  })
  optIdx4: number;

  @Column("smallint", { name: "opt_val4", default: () => "'0'" })
  optVal4: number;

  @Column("bigint", { name: "unique_id", unsigned: true, default: () => "'0'" })
  uniqueId: string;
}
