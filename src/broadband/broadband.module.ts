import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Broadband } from './broadband.entity/broadband.entity';
import { BroadbandService } from './broadband.service';
import { BroadbandController } from './broadband.controller';
import { MailModule } from 'src/mail/mail.module';

@Module({
  imports: [TypeOrmModule.forFeature([Broadband]), MailModule],
  providers: [BroadbandService],
  controllers: [BroadbandController],
  exports: [TypeOrmModule],
})
export class BroadbandModule {}
