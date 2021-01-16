import { Column, Entity } from "typeorm";

@Entity("map_reg_str_db", { schema: "hercules" })
export class MapRegStrDb {
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
