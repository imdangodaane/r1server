import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("expire_date", ["expireDate"], {})
@Index("receiver_accountid", ["receiverAccountid"], {})
@Index("receiver_id", ["receiverId"], {})
@Index("send_date", ["sendDate"], {})
@Index("sender_id", ["senderId"], {})
@Entity("rodex_mail", { schema: "hercules" })
export class RodexMail {
  @PrimaryGeneratedColumn({ type: "bigint", name: "mail_id" })
  mailId: string;

  @Column("varchar", { name: "sender_name", length: 30 })
  senderName: string;

  @Column("int", { name: "sender_id" })
  senderId: number;

  @Column("varchar", { name: "receiver_name", length: 30 })
  receiverName: string;

  @Column("int", { name: "receiver_id" })
  receiverId: number;

  @Column("int", { name: "receiver_accountid" })
  receiverAccountid: number;

  @Column("varchar", { name: "title", length: 50 })
  title: string;

  @Column("varchar", { name: "body", length: 510 })
  body: string;

  @Column("bigint", { name: "zeny" })
  zeny: string;

  @Column("tinyint", { name: "type", unsigned: true })
  type: number;

  @Column("tinyint", { name: "is_read" })
  isRead: number;

  @Column("tinyint", { name: "sender_read" })
  senderRead: number;

  @Column("int", { name: "send_date" })
  sendDate: number;

  @Column("int", { name: "expire_date" })
  expireDate: number;

  @Column("int", { name: "weight" })
  weight: number;
}
