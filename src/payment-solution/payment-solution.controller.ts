import { Controller, Get, Post, Body } from '@nestjs/common';
import { PaymentSolutionService } from './payment-solution.service';
import { PaymentSolution } from './payment-solution.entity/payment-solution.entity';

@Controller('paymentsolution')
export class PaymentSolutionController {
  constructor(
    private readonly paymentsolutionservice: PaymentSolutionService,
  ) {}

  @Post()
  create(@Body() data: Partial<PaymentSolution>) {
    return this.paymentsolutionservice.create(data);
  }

  @Get()
  findAll() {
    return this.paymentsolutionservice.findAll();
  }
}
