import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnergyModule } from './energy/energy.module';
import { WaterModule } from './water/water.module';
import { BroadbandModule } from './broadband/broadband.module';
import { PaymentSolutionModule } from './payment-solution/payment-solution.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'nescol',
      password: 'Nescol@1122',
      database: 'nescol',
      autoLoadEntities: true,
      synchronize: true,
      dropSchema: true,
    }),
    EnergyModule,
    WaterModule,
    BroadbandModule,
    PaymentSolutionModule,
    MailModule,
  ],
  controllers: [AppController], // Only AppController here
  providers: [AppService], // Only AppService here
})
export class AppModule {}
