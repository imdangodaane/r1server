import { Column, Entity, Index } from "typeorm";

@Index("char_id", ["charId"], {})
@Entity("char_reg_num_db", { schema: "hercules" })
export class CharRegNumDb {
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

  @Column("int", { name: "value", default: () => "'0'" })
  value: number;
}
