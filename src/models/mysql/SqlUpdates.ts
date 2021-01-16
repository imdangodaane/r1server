import { Column, Entity } from "typeorm";

@Entity("sql_updates", { schema: "hercules" })
export class SqlUpdates {
  @Column("int", { primary: true, name: "timestamp", unsigned: true })
  timestamp: number;

  @Column("enum", {
    name: "ignored",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  ignored: "Yes" | "No";
}
