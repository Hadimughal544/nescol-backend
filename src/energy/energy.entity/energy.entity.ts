import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('energy')
export class Energy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  service: string;

  @Column({ nullable: true })
  supplier: string;

  @Column({ nullable: true })
  bill: string;

  @Column({ nullable: true })
  eac: string;

  @Column({ type: 'date', nullable: true })
  expiry_date: string;

  @Column({ nullable: true })
  NewBusiness: string;

  @Column({ nullable: true })
  postcode: string;

  @Column({ nullable: true })
  currentaddress: string;

  @Column({ nullable: true })
  businessname: string;

  @Column({ nullable: true })
  address_line: string; // typo in name kept as given

  @Column({ nullable: true })
  town_city: string;

  @Column({ nullable: true })
  contactname: string;

  @Column({ nullable: true })
  mobile_number: string;

  @Column({ nullable: true })
  mpan: string;

  @Column({ nullable: true })
  mprn: string;

  @Column({ nullable: true })
  email_address: string;
}
