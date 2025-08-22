import { Body, Controller, Get, Post } from '@nestjs/common';
import { WaterService } from './water.service';
import { water } from './water.entity/water.entity';

@Controller('water')
export class WaterController {
  constructor(private readonly Waterservice: WaterService) {}

  @Post()
  create(@Body() data: Partial<water>) {
    return this.Waterservice.create(data);
  }

  @Get()
  findAll() {
    return this.Waterservice.findAll();
  }
}
