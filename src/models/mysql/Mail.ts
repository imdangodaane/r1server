import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("mail", { schema: "hercules" })
export class Mail {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
  id: string;

  @Column("varchar", { name: "send_name", length: 30 })
  sendName: string;

  @Column("int", { name: "send_id", unsigned: true, default: () => "'0'" })
  sendId: number;

  @Column("varchar", { name: "dest_name", length: 30 })
  destName: string;

  @Column("int", { name: "dest_id", unsigned: true, default: () => "'0'" })
  destId: number;

  @Column("varchar", { name: "title", length: 45 })
  title: string;

  @Column("varchar", { name: "message", length: 255 })
  message: string;

  @Column("int", { name: "time", unsigned: true, default: () => "'0'" })
  time: number;

  @Column("tinyint", { name: "status", default: () => "'0'" })
  status: number;

  @Column("int", { name: "zeny", unsigned: true, default: () => "'0'" })
  zeny: number;

  @Column("int", { name: "nameid", unsigned: true, default: () => "'0'" })
  nameid: number;

  @Column("int", { name: "amount", unsigned: true, default: () => "'0'" })
  amount: number;

  @Column("tinyint", { name: "refine", unsigned: true, default: () => "'0'" })
  refine: number;

  @Column("tinyint", {
    name: "attribute",
    unsigned: true,
    default: () => "'0'",
  })
  attribute: number;

  @Column("smallint", { name: "identify", default: () => "'0'" })
  identify: number;

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
