import { Column, Entity, Index } from "typeorm";

@Index("ip", ["ip"], {})
@Entity("loginlog", { schema: "hercules" })
export class Loginlog {
  @Column("datetime", { name: "time", nullable: true })
  time: Date | null;

  @Column("varchar", { name: "ip", length: 15 })
  ip: string;

  @Column("varchar", { name: "user", length: 23 })
  user: string;

  @Column("tinyint", { name: "rcode", default: () => "'0'" })
  rcode: number;

  @Column("varchar", { name: "log", length: 255 })
  log: string;
}
