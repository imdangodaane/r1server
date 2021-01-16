import { Column, Entity } from "typeorm";

@Entity("account_data", { schema: "hercules" })
export class AccountData {
  @Column("int", {
    primary: true,
    name: "account_id",
    unsigned: true,
    default: () => "'0'",
  })
  accountId: number;

  @Column("int", { name: "bank_vault", unsigned: true, default: () => "'0'" })
  bankVault: number;

  @Column("smallint", {
    name: "base_exp",
    unsigned: true,
    default: () => "'100'",
  })
  baseExp: number;

  @Column("smallint", {
    name: "base_drop",
    unsigned: true,
    default: () => "'100'",
  })
  baseDrop: number;

  @Column("smallint", {
    name: "base_death",
    unsigned: true,
    default: () => "'100'",
  })
  baseDeath: number;

  @Column("tinyint", {
    name: "attendance_count",
    unsigned: true,
    default: () => "'0'",
  })
  attendanceCount: number;

  @Column("bigint", {
    name: "attendance_timer",
    nullable: true,
    default: () => "'0'",
  })
  attendanceTimer: string | null;
}
