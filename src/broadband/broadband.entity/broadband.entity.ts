import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Broadband')
export class Broadband {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  service: string;

  @Column({ nullable: true })
  Supplier: string;

  @Column({ nullable: true })
  Postcode: string;

  @Column({ nullable: true })
  Current_Address: string;

  @Column({ nullable: true })
  Business_Name: string;

  @Column({ nullable: true })
  Address_llne1: string;

  @Column({ nullable: true })
  Town_City: string;

  @Column({ nullable: true })
  Contact_Name: string;

  @Column({ nullable: true })
  mobile_number: string;

  @Column({ nullable: true })
  transfer_Number: string;

  @Column({ nullable: true })
  email_address: string;
}
