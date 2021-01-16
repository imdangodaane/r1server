import { Column, Entity } from "typeorm";

@Entity("ragsrvinfo", { schema: "hercules" })
export class Ragsrvinfo {
  @Column("int", { name: "index", default: () => "'0'" })
  index: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("int", { name: "exp", unsigned: true, default: () => "'0'" })
  exp: number;

  @Column("int", { name: "jexp", unsigned: true, default: () => "'0'" })
  jexp: number;

  @Column("int", { name: "drop", unsigned: true, default: () => "'0'" })
  drop: number;
}
