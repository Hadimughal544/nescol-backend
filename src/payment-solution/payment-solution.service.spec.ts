import { Test, TestingModule } from '@nestjs/testing';
import { PaymentSolutionService } from './payment-solution.service';

describe('PaymentSolutionService', () => {
  let service: PaymentSolutionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentSolutionService],
    }).compile();

    service = module.get<PaymentSolutionService>(PaymentSolutionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
