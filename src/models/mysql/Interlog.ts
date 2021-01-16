import { Column, Entity } from "typeorm";

@Entity("interlog", { schema: "hercules" })
export class Interlog {
  @Column("datetime", { name: "time", nullable: true })
  time: Date | null;

  @Column("varchar", { name: "log", length: 255 })
  log: string;
}
