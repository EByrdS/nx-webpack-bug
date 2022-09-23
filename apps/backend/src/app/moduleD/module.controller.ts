import { Controller, Get } from '@nestjs/common';

import { ModuleDService } from './module.service';

@Controller('module-d')
export class ModuleDController {
  constructor(private readonly service: ModuleDService) {}

  @Get()
  getData() {
    return this.service.getData();
  }
}
