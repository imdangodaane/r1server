import { Column, Entity, Index } from "typeorm";

@Index("char_id", ["charId"], {})
@Entity("friends", { schema: "hercules" })
export class Friends {
  @Column("int", { name: "char_id", default: () => "'0'" })
  charId: number;

  @Column("int", { name: "friend_account", default: () => "'0'" })
  friendAccount: number;

  @Column("int", { name: "friend_id", default: () => "'0'" })
  friendId: number;
}
