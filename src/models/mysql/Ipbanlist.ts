import { Column, Entity, Index } from "typeorm";

@Index("list", ["list"], {})
@Entity("ipbanlist", { schema: "hercules" })
export class Ipbanlist {
  @Column("varchar", { name: "list", length: 39 })
  list: string;

  @Column("datetime", { name: "btime", nullable: true })
  btime: Date | null;

  @Column("datetime", { name: "rtime", nullable: true })
  rtime: Date | null;

  @Column("varchar", { name: "reason", length: 255 })
  reason: string;
}
