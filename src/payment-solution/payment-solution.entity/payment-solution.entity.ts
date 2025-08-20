import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class PaymentSolution {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  service: string;

  @Column({ nullable: true })
  Payment_service: string;

  @Column({ nullable: true })
  Annual_turnover: string;

  @Column({ nullable: true })
  Postcode: string;

  @Column({ nullable: true })
  Current_Address: string;

  @Column({ nullable: true })
  Business_Name: string;

  @Column({ nullable: true })
  Address_line1: string; // typo in name kept as given

  @Column({ nullable: true })
  Town_City: string;

  @Column({ nullable: true })
  Contact_Name: string;

  @Column({ nullable: true })
  Mobile_Number: string;

  @Column({ nullable: true })
  Email_Address: string;
}
