import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("type", ["type"], {})
@Entity("picklog", { schema: "hercules" })
export class Picklog {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("datetime", { name: "time", nullable: true })
  time: Date | null;

  @Column("int", { name: "char_id", default: () => "'0'" })
  charId: number;

  @Column("enum", {
    name: "type",
    enum: [
      "M",
      "P",
      "L",
      "T",
      "V",
      "S",
      "N",
      "C",
      "A",
      "R",
      "G",
      "E",
      "B",
      "O",
      "I",
      "X",
      "D",
      "U",
      "K",
      "Y",
      "Z",
      "W",
      "Q",
      "J",
      "H",
      "@",
      "0",
      "1",
      "2",
      "3",
    ],
    default: () => "'P'",
  })
  type:
    | "M"
    | "P"
    | "L"
    | "T"
    | "V"
    | "S"
    | "N"
    | "C"
    | "A"
    | "R"
    | "G"
    | "E"
    | "B"
    | "O"
    | "I"
    | "X"
    | "D"
    | "U"
    | "K"
    | "Y"
    | "Z"
    | "W"
    | "Q"
    | "J"
    | "H"
    | "@"
    | "0"
    | "1"
    | "2"
    | "3";

  @Column("int", { name: "nameid", default: () => "'0'" })
  nameid: number;

  @Column("int", { name: "amount", default: () => "'1'" })
  amount: number;

  @Column("tinyint", { name: "refine", unsigned: true, default: () => "'0'" })
  refine: number;

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

  @Column("smallint", {
    name: "opt_val0",
    unsigned: true,
    default: () => "'0'",
  })
  optVal0: number;

  @Column("smallint", {
    name: "opt_idx1",
    unsigned: true,
    default: () => "'0'",
  })
  optIdx1: number;

  @Column("smallint", {
    name: "opt_val1",
    unsigned: true,
    default: () => "'0'",
  })
  optVal1: number;

  @Column("smallint", {
    name: "opt_idx2",
    unsigned: true,
    default: () => "'0'",
  })
  optIdx2: number;

  @Column("smallint", {
    name: "opt_val2",
    unsigned: true,
    default: () => "'0'",
  })
  optVal2: number;

  @Column("smallint", {
    name: "opt_idx3",
    unsigned: true,
    default: () => "'0'",
  })
  optIdx3: number;

  @Column("smallint", {
    name: "opt_val3",
    unsigned: true,
    default: () => "'0'",
  })
  optVal3: number;

  @Column("smallint", {
    name: "opt_idx4",
    unsigned: true,
    default: () => "'0'",
  })
  optIdx4: number;

  @Column("smallint", {
    name: "opt_val4",
    unsigned: true,
    default: () => "'0'",
  })
  optVal4: number;

  @Column("bigint", { name: "unique_id", unsigned: true, default: () => "'0'" })
  uniqueId: string;

  @Column("varchar", { name: "map", length: 11 })
  map: string;
}
