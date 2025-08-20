import { Controller, Get, Post, Body } from '@nestjs/common';
import { EnergyService } from './energy.service';
import { Energy } from './energy.entity/energy.entity';

@Controller('energy')
export class EnergyController {
  constructor(private readonly energyService: EnergyService) {}

  @Post()
  create(@Body() data: Partial<Energy>) {
    return this.energyService.create(data);
  }

  @Get()
  findAll() {
    return this.energyService.findAll();
  }
}
