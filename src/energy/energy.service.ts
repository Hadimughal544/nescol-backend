import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Energy } from './energy.entity/energy.entity';
import { Repository } from 'typeorm';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class EnergyService {
  constructor(
    @InjectRepository(Energy)
    private readonly energyRepository: Repository<Energy>,
    private readonly mail: MailService,
  ) {}

  async create(dto: Partial<Energy>): Promise<Energy> {
    const newRecord = this.energyRepository.create(dto);
    const saved = await this.energyRepository.save(newRecord);

    await this.mail.sendMail(
      'New Energy Submission',
      `
      <h3>New energy record</h3>
      <p><b>Service</b> ${saved.service}</p>
      <p><b>Supplier</b> ${saved.supplier}</p>
      <p><b>Bill is</b> ${saved.bill}</p>
      <p><b>Eac is </b> ${saved.eac}</p>
      <p><b>Expiry date </b> ${saved.expiry_date}</p>
      <p><b>Is New Business </b> ${saved.NewBusiness}</p>
      <p><b>Postcode</b> ${saved.postcode}</p>
      <p><b>Current Address</b> ${saved.currentaddress}</p>
      <p><b>Address line</b> ${saved.address_line}</p>
      <p><b>Town or City</b> ${saved.town_city}</p>
      <p><b>Business Name</b> ${saved.businessname}</p>
      <p><b>Contact Name</b> ${saved.contactname}</p>
      <p><b>Mobile Number</b> ${saved.mobile_number}</p>
      <p><b>Email Address</b> ${saved.email_address}</p>
      <p><b>MPAN</b> ${saved.mpan}</p>
      <p><b>MPRN</b> ${saved.mprn}</p>
      `,
    );

    return saved;
  }

  async findAll(): Promise<Energy[]> {
    return await this.energyRepository.find();
  }
}
