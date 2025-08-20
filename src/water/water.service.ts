import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { water } from './water.entity/water.entity';
import { MailService } from '../mail/mail.service';

@Injectable()
export class WaterService {
  constructor(
    @InjectRepository(water)
    private readonly waterRepository: Repository<water>,
    private readonly mail: MailService, // <-- inject mail service
  ) {}

  async create(dto: Partial<water>): Promise<water> {
    // 1. Save the record in the DB
    const newRecord = this.waterRepository.create(dto);
    const saved = await this.waterRepository.save(newRecord);

    // 2. Send email with the saved data
    await this.mail.sendMail(
      'New Water Submission',
      `
        <h3>New Water Record</h3>
        <p><b>Water_Product:</b> ${saved.Water_product}</p>
        <p><b>Yearly Bill</b> ${saved.Yearly_Bill}</p>
        <p><b>Postcode</b> ${saved.Postcode}</p>
        <p><b>Current Address</b> ${saved.Current_Address}</p>
        <p><b>Address line</b> ${saved.Address_line1}</p>
        <p><b>Town or City</b> ${saved.Town_City}</p>
        <p><b>Business Name</b> ${saved.Business_Name}</p>
        <p><b>Contact Name</b> ${saved.Contact_Name}</p>
        <p><b>Mobile Number</b> ${saved.Mobile_number}</p>
        <p><b>Email Address</b> ${saved.Email_Address}</p>
        <p><b>Created At:</b> ${new Date().toLocaleString()}</p>
      `,
    );

    return saved;
  }

  async findAll(): Promise<water[]> {
    return await this.waterRepository.find();
  }
}
