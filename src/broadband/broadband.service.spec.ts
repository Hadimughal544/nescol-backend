import { Test, TestingModule } from '@nestjs/testing';
import { BroadbandService } from './broadband.service';

describe('BroadbandService', () => {
  let service: BroadbandService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BroadbandService],
    }).compile();

    service = module.get<BroadbandService>(BroadbandService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
