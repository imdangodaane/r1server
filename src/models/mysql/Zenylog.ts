import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("type", ["type"], {})
@Entity("zenylog", { schema: "hercules" })
export class Zenylog {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("datetime", { name: "time", nullable: true })
  time: Date | null;

  @Column("int", { name: "char_id", default: () => "'0'" })
  charId: number;

  @Column("int", { name: "src_id", default: () => "'0'" })
  srcId: number;

  @Column("enum", {
    name: "type",
    enum: ["T", "V", "P", "M", "S", "N", "D", "C", "A", "E", "I", "B", "K"],
    default: () => "'S'",
  })
  type:
    | "T"
    | "V"
    | "P"
    | "M"
    | "S"
    | "N"
    | "D"
    | "C"
    | "A"
    | "E"
    | "I"
    | "B"
    | "K";

  @Column("int", { name: "amount", default: () => "'0'" })
  amount: number;

  @Column("varchar", { name: "map", length: 11 })
  map: string;
}
