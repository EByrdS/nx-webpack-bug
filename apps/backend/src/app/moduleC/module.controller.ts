import { Controller, Get } from '@nestjs/common';

import { ModuleCService } from './module.service';

@Controller('module-c')
export class ModuleCController {
  constructor(private readonly service: ModuleCService) {}

  @Get()
  getData() {
    return this.service.getData();
  }
}
