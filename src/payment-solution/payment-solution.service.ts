import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentSolution } from './payment-solution.entity/payment-solution.entity';
import { Repository } from 'typeorm';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class PaymentSolutionService {
  constructor(
    @InjectRepository(PaymentSolution)
    private readonly PaymentSolutionrepository: Repository<PaymentSolution>,
    private readonly mail: MailService,
  ) {}

  async create(dto: Partial<PaymentSolution>): Promise<PaymentSolution> {
    const newRecord = this.PaymentSolutionrepository.create(dto);
    const saved = await this.PaymentSolutionrepository.save(newRecord);

    await this.mail.sendMail(
      'New Payment Submission',
      `
        <h3>New Payment Solution Record</h3>
        <p><b>Payment Product</b> ${saved.Payment_service}</p>
        <p><b>Annual Turnover</b> ${saved.Annual_turnover}</p>
        <p><b>Postcode</b> ${saved.Postcode}</p>
        <p><b>Current Address</b> ${saved.Current_Address}</p>
        <p><b>Address line</b> ${saved.Address_line1}</p>
        <p><b>Town or City</b> ${saved.Town_City}</p>
        <p><b>Business Name</b> ${saved.Business_Name}</p>
        <p><b>Contact Name</b> ${saved.Contact_Name}</p>
        <p><b>Mobile Number</b> ${saved.Mobile_Number}</p>
        <p><b>Email Address</b> ${saved.Email_Address}</p>
        <p><b>Created At:</b> ${new Date().toLocaleString()}</p>
      `,
    );

    return saved;
  }

  async findAll(): Promise<PaymentSolution[]> {
    return this.PaymentSolutionrepository.find();
  }
}
