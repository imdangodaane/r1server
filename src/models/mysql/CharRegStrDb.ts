import { Column, Entity, Index } from "typeorm";

@Index("char_id", ["charId"], {})
@Entity("char_reg_str_db", { schema: "hercules" })
export class CharRegStrDb {
  @Column("int", {
    primary: true,
    name: "char_id",
    unsigned: true,
    default: () => "'0'",
  })
  charId: number;

  @Column("varchar", { primary: true, name: "key", length: 32 })
  key: string;

  @Column("int", {
    primary: true,
    name: "index",
    unsigned: true,
    default: () => "'0'",
  })
  index: number;

  @Column("varchar", { name: "value", length: 255, default: () => "'0'" })
  value: string;
}
