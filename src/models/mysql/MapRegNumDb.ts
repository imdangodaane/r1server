import { Column, Entity } from "typeorm";

@Entity("map_reg_num_db", { schema: "hercules" })
export class MapRegNumDb {
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
