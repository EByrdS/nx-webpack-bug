import { Controller, Get } from '@nestjs/common';

import { ModuleBService } from './module.service';

@Controller('module-b')
export class ModuleBController {
  constructor(private readonly service: ModuleBService) {}

  @Get()
  getData() {
    return this.service.getData();
  }
}
