import { Column, Entity } from "typeorm";

@Entity("charlog", { schema: "hercules" })
export class Charlog {
  @Column("datetime", { name: "time", nullable: true })
  time: Date | null;

  @Column("varchar", {
    name: "char_msg",
    length: 255,
    default: () => "'char select'",
  })
  charMsg: string;

  @Column("int", { name: "account_id", default: () => "'0'" })
  accountId: number;

  @Column("int", { name: "char_id", unsigned: true, default: () => "'0'" })
  charId: number;

  @Column("tinyint", { name: "char_num", default: () => "'0'" })
  charNum: number;

  @Column("mediumint", { name: "class", default: () => "'0'" })
  class: number;

  @Column("varchar", { name: "name", length: 23 })
  name: string;

  @Column("int", { name: "str", unsigned: true, default: () => "'0'" })
  str: number;

  @Column("int", { name: "agi", unsigned: true, default: () => "'0'" })
  agi: number;

  @Column("int", { name: "vit", unsigned: true, default: () => "'0'" })
  vit: number;

  @Column("int", { name: "int", unsigned: true, default: () => "'0'" })
  int: number;

  @Column("int", { name: "dex", unsigned: true, default: () => "'0'" })
  dex: number;

  @Column("int", { name: "luk", unsigned: true, default: () => "'0'" })
  luk: number;

  @Column("tinyint", { name: "hair", default: () => "'0'" })
  hair: number;

  @Column("int", { name: "hair_color", default: () => "'0'" })
  hairColor: number;
}
