import { Controller, Get } from '@nestjs/common';

import { ModuleEService } from './module.service';

@Controller('module-e')
export class ModuleEController {
  constructor(private readonly service: ModuleEService) {}

  @Get()
  getData() {
    return this.service.getData();
  }
}
