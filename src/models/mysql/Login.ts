import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("name", ["userid"], { unique: true })
@Entity("login", { schema: "hercules" })
export class Login {
  @PrimaryGeneratedColumn({ type: "int", name: "account_id", unsigned: true })
  accountId: number;

  @Column("varchar", { name: "userid", unique: true, length: 23 })
  userid: string;

  @Column("varchar", { name: "user_pass", length: 32 })
  userPass: string;

  @Column("enum", { name: "sex", enum: ["M", "F", "S"], default: () => "'M'" })
  sex: "M" | "F" | "S";

  @Column("varchar", { name: "email", length: 39 })
  email: string;

  @Column("tinyint", { name: "group_id", default: () => "'0'" })
  groupId: number;

  @Column("int", { name: "state", unsigned: true, default: () => "'0'" })
  state: number;

  @Column("int", { name: "unban_time", unsigned: true, default: () => "'0'" })
  unbanTime: number;

  @Column("int", {
    name: "expiration_time",
    unsigned: true,
    default: () => "'0'",
  })
  expirationTime: number;

  @Column("mediumint", {
    name: "logincount",
    unsigned: true,
    default: () => "'0'",
  })
  logincount: number;

  @Column("datetime", { name: "lastlogin", nullable: true })
  lastlogin: Date | null;

  @Column("varchar", { name: "last_ip", length: 100 })
  lastIp: string;

  @Column("date", { name: "birthdate", nullable: true })
  birthdate: string | null;

  @Column("tinyint", {
    name: "character_slots",
    unsigned: true,
    default: () => "'0'",
  })
  characterSlots: number;

  @Column("varchar", { name: "pincode", length: 4 })
  pincode: string;

  @Column("int", {
    name: "pincode_change",
    unsigned: true,
    default: () => "'0'",
  })
  pincodeChange: number;
}
