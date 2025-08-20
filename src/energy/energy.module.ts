import { Module } from '@nestjs/common';
import { EnergyService } from './energy.service';
import { EnergyController } from './energy.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Energy } from './energy.entity/energy.entity';
import { MailModule } from 'src/mail/mail.module';

@Module({
  imports: [TypeOrmModule.forFeature([Energy]), MailModule],
  providers: [EnergyService],
  controllers: [EnergyController],
})
export class EnergyModule {}
