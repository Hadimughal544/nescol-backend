import { Body, Controller, Get, Post } from '@nestjs/common';
import { BroadbandService } from './broadband.service';
import { Broadband } from './broadband.entity/broadband.entity';

@Controller('broadband')
export class BroadbandController {
  constructor(private readonly broadbandservice: BroadbandService) {}

  @Post()
  create(@Body() data: Partial<Broadband>) {
    return this.broadbandservice.create(data);
  }

  @Get()
  findAll() {
    return this.broadbandservice.findAll();
  }
}
