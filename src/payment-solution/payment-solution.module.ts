import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentSolution } from './payment-solution.entity/payment-solution.entity';
import { PaymentSolutionService } from './payment-solution.service';
import { PaymentSolutionController } from './payment-solution.controller';
import { MailModule } from 'src/mail/mail.module';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentSolution]), MailModule],
  providers: [PaymentSolutionService],
  controllers: [PaymentSolutionController],
})
export class PaymentSolutionModule {}
