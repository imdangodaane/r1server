import { Column, Entity, Index } from "typeorm";

@Index("char_id", ["charId"], {})
@Entity("guild_member", { schema: "hercules" })
export class GuildMember {
  @Column("int", {
    primary: true,
    name: "guild_id",
    unsigned: true,
    default: () => "'0'",
  })
  guildId: number;

  @Column("int", { name: "account_id", unsigned: true, default: () => "'0'" })
  accountId: number;

  @Column("int", {
    primary: true,
    name: "char_id",
    unsigned: true,
    default: () => "'0'",
  })
  charId: number;

  @Column("tinyint", { name: "hair", unsigned: true, default: () => "'0'" })
  hair: number;

  @Column("smallint", {
    name: "hair_color",
    unsigned: true,
    default: () => "'0'",
  })
  hairColor: number;

  @Column("tinyint", { name: "gender", unsigned: true, default: () => "'0'" })
  gender: number;

  @Column("smallint", { name: "class", unsigned: true, default: () => "'0'" })
  class: number;

  @Column("smallint", { name: "lv", unsigned: true, default: () => "'0'" })
  lv: number;

  @Column("bigint", { name: "exp", unsigned: true, default: () => "'0'" })
  exp: string;

  @Column("tinyint", {
    name: "exp_payper",
    unsigned: true,
    default: () => "'0'",
  })
  expPayper: number;

  @Column("tinyint", { name: "online", unsigned: true, default: () => "'0'" })
  online: number;

  @Column("tinyint", { name: "position", unsigned: true, default: () => "'0'" })
  position: number;

  @Column("varchar", { name: "name", length: 24 })
  name: string;
}
