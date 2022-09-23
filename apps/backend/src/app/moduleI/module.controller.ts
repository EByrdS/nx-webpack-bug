import { Controller, Get } from '@nestjs/common';

import { ModuleIService } from './module.service';

@Controller('module-i')
export class ModuleIController {
  constructor(private readonly service: ModuleIService) {}

  @Get()
  getData() {
    return this.service.getData();
  }
}
