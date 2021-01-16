import { Column, Entity } from "typeorm";

@Entity("item_db2", { schema: "hercules" })
export class ItemDb2 {
  @Column("int", {
    primary: true,
    name: "id",
    unsigned: true,
    default: () => "'0'",
  })
  id: number;

  @Column("varchar", { name: "name_english", length: 50 })
  nameEnglish: string;

  @Column("varchar", { name: "name_japanese", length: 50 })
  nameJapanese: string;

  @Column("tinyint", { name: "type", unsigned: true, default: () => "'0'" })
  type: number;

  @Column("tinyint", { name: "subtype", nullable: true, unsigned: true })
  subtype: number | null;

  @Column("mediumint", { name: "price_buy", nullable: true })
  priceBuy: number | null;

  @Column("mediumint", { name: "price_sell", nullable: true })
  priceSell: number | null;

  @Column("smallint", { name: "weight", nullable: true, unsigned: true })
  weight: number | null;

  @Column("smallint", { name: "atk", nullable: true, unsigned: true })
  atk: number | null;

  @Column("smallint", { name: "matk", nullable: true, unsigned: true })
  matk: number | null;

  @Column("smallint", { name: "defence", nullable: true, unsigned: true })
  defence: number | null;

  @Column("tinyint", { name: "range", nullable: true, unsigned: true })
  range: number | null;

  @Column("tinyint", { name: "slots", nullable: true, unsigned: true })
  slots: number | null;

  @Column("bigint", { name: "equip_jobs", nullable: true, unsigned: true })
  equipJobs: string | null;

  @Column("tinyint", { name: "equip_upper", nullable: true, unsigned: true })
  equipUpper: number | null;

  @Column("tinyint", { name: "equip_genders", nullable: true, unsigned: true })
  equipGenders: number | null;

  @Column("mediumint", {
    name: "equip_locations",
    nullable: true,
    unsigned: true,
  })
  equipLocations: number | null;

  @Column("tinyint", { name: "weapon_level", nullable: true, unsigned: true })
  weaponLevel: number | null;

  @Column("smallint", {
    name: "equip_level_min",
    nullable: true,
    unsigned: true,
  })
  equipLevelMin: number | null;

  @Column("smallint", {
    name: "equip_level_max",
    nullable: true,
    unsigned: true,
  })
  equipLevelMax: number | null;

  @Column("tinyint", { name: "refineable", nullable: true, unsigned: true })
  refineable: number | null;

  @Column("tinyint", {
    name: "disable_options",
    nullable: true,
    unsigned: true,
  })
  disableOptions: number | null;

  @Column("smallint", { name: "view_sprite", nullable: true, unsigned: true })
  viewSprite: number | null;

  @Column("tinyint", { name: "bindonequip", nullable: true, unsigned: true })
  bindonequip: number | null;

  @Column("tinyint", { name: "forceserial", nullable: true, unsigned: true })
  forceserial: number | null;

  @Column("tinyint", { name: "buyingstore", nullable: true, unsigned: true })
  buyingstore: number | null;

  @Column("mediumint", { name: "delay", nullable: true, unsigned: true })
  delay: number | null;

  @Column("smallint", { name: "trade_flag", nullable: true, unsigned: true })
  tradeFlag: number | null;

  @Column("smallint", { name: "trade_group", nullable: true, unsigned: true })
  tradeGroup: number | null;

  @Column("smallint", { name: "nouse_flag", nullable: true, unsigned: true })
  nouseFlag: number | null;

  @Column("smallint", { name: "nouse_group", nullable: true, unsigned: true })
  nouseGroup: number | null;

  @Column("mediumint", { name: "stack_amount", nullable: true, unsigned: true })
  stackAmount: number | null;

  @Column("tinyint", { name: "stack_flag", nullable: true, unsigned: true })
  stackFlag: number | null;

  @Column("mediumint", { name: "sprite", nullable: true, unsigned: true })
  sprite: number | null;

  @Column("text", { name: "script", nullable: true })
  script: string | null;

  @Column("text", { name: "equip_script", nullable: true })
  equipScript: string | null;

  @Column("text", { name: "unequip_script", nullable: true })
  unequipScript: string | null;
}
