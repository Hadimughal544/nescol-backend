import { Injectable } from '@nestjs/common';
import nodemailer, { Transporter } from 'nodemailer';

@Injectable()
export class MailService {
  private transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'requestnescol@gmail.com', // your Gmail
        pass: 'fizw caxu eyao yzvt', // NOT your normal Gmail password
      },
    });
  }

  async sendMail(subject: string, html: string) {
    await this.transporter.sendMail({
      from: '"My App" <requestnescol@gmail.com>', // match the auth user
      to: 'support@nescolutilities.co.uk',
      subject,
      html,
    });
  }
}
