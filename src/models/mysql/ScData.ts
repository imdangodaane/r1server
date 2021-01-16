import { Column, Entity, Index } from "typeorm";

@Index("account_id", ["accountId"], {})
@Index("char_id", ["charId"], {})
@Entity("sc_data", { schema: "hercules" })
export class ScData {
  @Column("int", { primary: true, name: "account_id", unsigned: true })
  accountId: number;

  @Column("int", { primary: true, name: "char_id", unsigned: true })
  charId: number;

  @Column("smallint", { primary: true, name: "type", unsigned: true })
  type: number;

  @Column("int", { name: "tick" })
  tick: number;

  @Column("int", { name: "total_tick" })
  totalTick: number;

  @Column("int", { name: "val1", default: () => "'0'" })
  val1: number;

  @Column("int", { name: "val2", default: () => "'0'" })
  val2: number;

  @Column("int", { name: "val3", default: () => "'0'" })
  val3: number;

  @Column("int", { name: "val4", default: () => "'0'" })
  val4: number;
}
