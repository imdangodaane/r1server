import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("homunculus", { schema: "hercules" })
export class Homunculus {
  @PrimaryGeneratedColumn({ type: "int", name: "homun_id" })
  homunId: number;

  @Column("int", { name: "char_id" })
  charId: number;

  @Column("mediumint", { name: "class", unsigned: true, default: () => "'0'" })
  class: number;

  @Column("mediumint", { name: "prev_class", default: () => "'0'" })
  prevClass: number;

  @Column("varchar", { name: "name", length: 24 })
  name: string;

  @Column("smallint", { name: "level", default: () => "'0'" })
  level: number;

  @Column("int", { name: "exp", default: () => "'0'" })
  exp: number;

  @Column("int", { name: "intimacy", default: () => "'0'" })
  intimacy: number;

  @Column("smallint", { name: "hunger", default: () => "'0'" })
  hunger: number;

  @Column("smallint", { name: "str", unsigned: true, default: () => "'0'" })
  str: number;

  @Column("smallint", { name: "agi", unsigned: true, default: () => "'0'" })
  agi: number;

  @Column("smallint", { name: "vit", unsigned: true, default: () => "'0'" })
  vit: number;

  @Column("smallint", { name: "INT", unsigned: true, default: () => "'0'" })
  int: number;

  @Column("smallint", { name: "dex", unsigned: true, default: () => "'0'" })
  dex: number;

  @Column("smallint", { name: "luk", unsigned: true, default: () => "'0'" })
  luk: number;

  @Column("int", { name: "hp", default: () => "'1'" })
  hp: number;

  @Column("int", { name: "max_hp", default: () => "'1'" })
  maxHp: number;

  @Column("int", { name: "sp", default: () => "'1'" })
  sp: number;

  @Column("int", { name: "max_sp", default: () => "'1'" })
  maxSp: number;

  @Column("smallint", {
    name: "skill_point",
    unsigned: true,
    default: () => "'0'",
  })
  skillPoint: number;

  @Column("tinyint", { name: "alive", default: () => "'1'" })
  alive: number;

  @Column("tinyint", { name: "rename_flag", default: () => "'0'" })
  renameFlag: number;

  @Column("tinyint", { name: "vaporize", default: () => "'0'" })
  vaporize: number;

  @Column("tinyint", { name: "autofeed", default: () => "'0'" })
  autofeed: number;
}
