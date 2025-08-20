import { Test, TestingModule } from '@nestjs/testing';
import { BroadbandController } from './broadband.controller';

describe('BroadbandController', () => {
  let controller: BroadbandController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BroadbandController],
    }).compile();

    controller = module.get<BroadbandController>(BroadbandController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
