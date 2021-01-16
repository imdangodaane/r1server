import { Column, Entity } from "typeorm";

@Entity("mob_db2", { schema: "hercules" })
export class MobDb2 {
  @Column("mediumint", {
    primary: true,
    name: "ID",
    unsigned: true,
    default: () => "'0'",
  })
  id: number;

  @Column("text", { name: "Sprite" })
  sprite: string;

  @Column("text", { name: "kName" })
  kName: string;

  @Column("text", { name: "iName" })
  iName: string;

  @Column("tinyint", { name: "LV", unsigned: true, default: () => "'0'" })
  lv: number;

  @Column("int", { name: "HP", unsigned: true, default: () => "'0'" })
  hp: number;

  @Column("mediumint", { name: "SP", unsigned: true, default: () => "'0'" })
  sp: number;

  @Column("mediumint", { name: "EXP", unsigned: true, default: () => "'0'" })
  exp: number;

  @Column("mediumint", { name: "JEXP", unsigned: true, default: () => "'0'" })
  jexp: number;

  @Column("tinyint", { name: "Range1", unsigned: true, default: () => "'0'" })
  range1: number;

  @Column("smallint", { name: "ATK1", unsigned: true, default: () => "'0'" })
  atk1: number;

  @Column("smallint", { name: "ATK2", unsigned: true, default: () => "'0'" })
  atk2: number;

  @Column("smallint", { name: "DEF", unsigned: true, default: () => "'0'" })
  def: number;

  @Column("smallint", { name: "MDEF", unsigned: true, default: () => "'0'" })
  mdef: number;

  @Column("smallint", { name: "STR", unsigned: true, default: () => "'0'" })
  str: number;

  @Column("smallint", { name: "AGI", unsigned: true, default: () => "'0'" })
  agi: number;

  @Column("smallint", { name: "VIT", unsigned: true, default: () => "'0'" })
  vit: number;

  @Column("smallint", { name: "INT", unsigned: true, default: () => "'0'" })
  int: number;

  @Column("smallint", { name: "DEX", unsigned: true, default: () => "'0'" })
  dex: number;

  @Column("smallint", { name: "LUK", unsigned: true, default: () => "'0'" })
  luk: number;

  @Column("tinyint", { name: "Range2", unsigned: true, default: () => "'0'" })
  range2: number;

  @Column("tinyint", { name: "Range3", unsigned: true, default: () => "'0'" })
  range3: number;

  @Column("tinyint", { name: "Scale", unsigned: true, default: () => "'0'" })
  scale: number;

  @Column("tinyint", { name: "Race", unsigned: true, default: () => "'0'" })
  race: number;

  @Column("tinyint", { name: "Element", unsigned: true, default: () => "'0'" })
  element: number;

  @Column("int", { name: "Mode", unsigned: true, default: () => "'0'" })
  mode: number;

  @Column("smallint", { name: "Speed", unsigned: true, default: () => "'0'" })
  speed: number;

  @Column("smallint", { name: "aDelay", unsigned: true, default: () => "'0'" })
  aDelay: number;

  @Column("smallint", { name: "aMotion", unsigned: true, default: () => "'0'" })
  aMotion: number;

  @Column("smallint", { name: "dMotion", unsigned: true, default: () => "'0'" })
  dMotion: number;

  @Column("mediumint", { name: "MEXP", unsigned: true, default: () => "'0'" })
  mexp: number;

  @Column("smallint", { name: "MVP1id", unsigned: true, default: () => "'0'" })
  mvp1id: number;

  @Column("smallint", { name: "MVP1per", unsigned: true, default: () => "'0'" })
  mvp1per: number;

  @Column("smallint", { name: "MVP2id", unsigned: true, default: () => "'0'" })
  mvp2id: number;

  @Column("smallint", { name: "MVP2per", unsigned: true, default: () => "'0'" })
  mvp2per: number;

  @Column("smallint", { name: "MVP3id", unsigned: true, default: () => "'0'" })
  mvp3id: number;

  @Column("smallint", { name: "MVP3per", unsigned: true, default: () => "'0'" })
  mvp3per: number;

  @Column("smallint", { name: "Drop1id", unsigned: true, default: () => "'0'" })
  drop1id: number;

  @Column("smallint", {
    name: "Drop1per",
    unsigned: true,
    default: () => "'0'",
  })
  drop1per: number;

  @Column("smallint", { name: "Drop2id", unsigned: true, default: () => "'0'" })
  drop2id: number;

  @Column("smallint", {
    name: "Drop2per",
    unsigned: true,
    default: () => "'0'",
  })
  drop2per: number;

  @Column("smallint", { name: "Drop3id", unsigned: true, default: () => "'0'" })
  drop3id: number;

  @Column("smallint", {
    name: "Drop3per",
    unsigned: true,
    default: () => "'0'",
  })
  drop3per: number;

  @Column("smallint", { name: "Drop4id", unsigned: true, default: () => "'0'" })
  drop4id: number;

  @Column("smallint", {
    name: "Drop4per",
    unsigned: true,
    default: () => "'0'",
  })
  drop4per: number;

  @Column("smallint", { name: "Drop5id", unsigned: true, default: () => "'0'" })
  drop5id: number;

  @Column("smallint", {
    name: "Drop5per",
    unsigned: true,
    default: () => "'0'",
  })
  drop5per: number;

  @Column("smallint", { name: "Drop6id", unsigned: true, default: () => "'0'" })
  drop6id: number;

  @Column("smallint", {
    name: "Drop6per",
    unsigned: true,
    default: () => "'0'",
  })
  drop6per: number;

  @Column("smallint", { name: "Drop7id", unsigned: true, default: () => "'0'" })
  drop7id: number;

  @Column("smallint", {
    name: "Drop7per",
    unsigned: true,
    default: () => "'0'",
  })
  drop7per: number;

  @Column("smallint", { name: "Drop8id", unsigned: true, default: () => "'0'" })
  drop8id: number;

  @Column("smallint", {
    name: "Drop8per",
    unsigned: true,
    default: () => "'0'",
  })
  drop8per: number;

  @Column("smallint", { name: "Drop9id", unsigned: true, default: () => "'0'" })
  drop9id: number;

  @Column("smallint", {
    name: "Drop9per",
    unsigned: true,
    default: () => "'0'",
  })
  drop9per: number;

  @Column("smallint", {
    name: "DropCardid",
    unsigned: true,
    default: () => "'0'",
  })
  dropCardid: number;

  @Column("smallint", {
    name: "DropCardper",
    unsigned: true,
    default: () => "'0'",
  })
  dropCardper: number;
}
