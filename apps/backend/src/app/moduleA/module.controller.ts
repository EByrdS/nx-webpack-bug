import { Controller, Get } from '@nestjs/common';

import { ModuleAService } from './module.service';

@Controller('module-a')
export class ModuleAController {
  constructor(private readonly service: ModuleAService) {}

  @Get()
  getData() {
    return this.service.getData();
  }
}
