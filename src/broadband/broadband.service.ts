import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Broadband } from './broadband.entity/broadband.entity';
import { Repository } from 'typeorm';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class BroadbandService {
  constructor(
    @InjectRepository(Broadband)
    private readonly broadbandRepository: Repository<Broadband>,
    private readonly mail: MailService,
  ) {}

  async create(dto: Partial<Broadband>): Promise<Broadband> {
    const newRecord = this.broadbandRepository.create(dto);
    const saved = await this.broadbandRepository.save(newRecord);

    await this.mail.sendMail(
      'New Broadband Submission',
      `
        <h3>New Broadband Record</h3>
        <p><b>Broadband Supplier</b> ${saved.Supplier}</p>
        <p><b>Postcode</b> ${saved.Postcode}</p>
        <p><b>Current Address</b> ${saved.Current_Address}</p>
        <p><b>Address line</b> ${saved.Address_llne1}</p>
        <p><b>Town or City</b> ${saved.Town_City}</p>
        <p><b>Business Name</b> ${saved.Business_Name}</p>
        <p><b>Contact Name</b> ${saved.Contact_Name}</p>
        <p><b>Mobile Number</b> ${saved.mobile_number}</p>
        <p><b>Email Address</b> ${saved.email_address}</p>
        <p><b>Phone Number to Transfer</b> ${saved.transfer_Number}</p>
        <p><b>Created At:</b> ${new Date().toLocaleString()}</p>
      `,
    );

    return saved;
  }

  async findAll(): Promise<Broadband[]> {
    return await this.broadbandRepository.find();
  }
}
