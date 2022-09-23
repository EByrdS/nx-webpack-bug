import { Controller, Get } from '@nestjs/common';

import { ModuleHService } from './module.service';

@Controller('module-h')
export class ModuleHController {
  constructor(private readonly service: ModuleHService) {}

  @Get()
  getData() {
    return this.service.getData();
  }
}
