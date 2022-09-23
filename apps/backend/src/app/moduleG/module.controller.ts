import { Controller, Get } from '@nestjs/common';

import { ModuleGService } from './module.service';

@Controller('module-g')
export class ModuleGController {
  constructor(private readonly service: ModuleGService) {}

  @Get()
  getData() {
    return this.service.getData();
  }
}
