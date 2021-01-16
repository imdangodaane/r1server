import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("src_accountid", ["srcAccountid"], {})
@Index("src_charid", ["srcCharid"], {})
@Entity("chatlog", { schema: "hercules" })
export class Chatlog {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("datetime", { name: "time", nullable: true })
  time: Date | null;

  @Column("enum", {
    name: "type",
    enum: ["O", "W", "P", "G", "M", "C"],
    default: () => "'O'",
  })
  type: "O" | "W" | "P" | "G" | "M" | "C";

  @Column("int", { name: "type_id", default: () => "'0'" })
  typeId: number;

  @Column("int", { name: "src_charid", default: () => "'0'" })
  srcCharid: number;

  @Column("int", { name: "src_accountid", default: () => "'0'" })
  srcAccountid: number;

  @Column("varchar", { name: "src_map", length: 11 })
  srcMap: string;

  @Column("smallint", { name: "src_map_x", default: () => "'0'" })
  srcMapX: number;

  @Column("smallint", { name: "src_map_y", default: () => "'0'" })
  srcMapY: number;

  @Column("varchar", { name: "dst_charname", length: 25 })
  dstCharname: string;

  @Column("varchar", { name: "message", length: 150 })
  message: string;
}
