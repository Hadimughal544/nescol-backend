import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('water')
export class water {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  service: string;

  @Column({ nullable: true })
  Water_product: string;

  @Column({ nullable: true })
  Yearly_Bill: string;

  @Column({ nullable: true })
  Postcode: string;

  @Column({ nullable: true })
  Current_Address: string;

  @Column({ nullable: true })
  Business_Name: string;

  @Column({ nullable: true })
  Address_line1: string;

  @Column({ nullable: true })
  Town_City: string;

  @Column({ nullable: true })
  Contact_Name: string;

  @Column({ nullable: true })
  Mobile_number: string;

  @Column({ nullable: true })
  Email_Address: string;
}
