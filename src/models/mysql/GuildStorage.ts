import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("guild_id", ["guildId"], {})
@Entity("guild_storage", { schema: "hercules" })
export class GuildStorage {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "guild_id", unsigned: true, default: () => "'0'" })
  guildId: number;

  @Column("int", { name: "nameid", unsigned: true, default: () => "'0'" })
  nameid: number;

  @Column("int", { name: "amount", unsigned: true, default: () => "'0'" })
  amount: number;

  @Column("int", { name: "equip", unsigned: true, default: () => "'0'" })
  equip: number;

  @Column("smallint", {
    name: "identify",
    unsigned: true,
    default: () => "'0'",
  })
  identify: number;

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

  @Column("int", { name: "expire_time", unsigned: true, default: () => "'0'" })
  expireTime: number;

  @Column("tinyint", { name: "bound", unsigned: true, default: () => "'0'" })
  bound: number;

  @Column("bigint", { name: "unique_id", unsigned: true, default: () => "'0'" })
  uniqueId: string;
}
