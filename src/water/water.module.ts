import { Module } from '@nestjs/common';
import { WaterController } from './water.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { water } from './water.entity/water.entity';
import { WaterService } from './water.service';
import { MailModule } from 'src/mail/mail.module';

@Module({
  imports: [TypeOrmModule.forFeature([water]), MailModule],
  providers: [WaterService],
  controllers: [WaterController],
  exports: [TypeOrmModule],
})
export class WaterModule {}
