import { Module } from '@nestjs/common';

import { ModuleDController } from './module.controller';
import { ModuleDService } from './module.service';

@Module({
  imports: [],
  controllers: [ModuleDController],
  providers: [ModuleDService],
})
export class ModuleD {}
