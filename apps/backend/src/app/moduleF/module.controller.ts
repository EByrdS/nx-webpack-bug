import { Controller, Get } from '@nestjs/common';

import { ModuleFService } from './module.service';

@Controller('module-f')
export class ModuleFController {
  constructor(private readonly service: ModuleFService) {}

  @Get()
  getData() {
    return this.service.getData();
  }
}
