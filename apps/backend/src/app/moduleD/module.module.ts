import { Module } from '@nestjs/common';

import { ModuleDController } from './module.controller';
import { ModuleDResolver } from './module.resolver';
import { ModuleDService } from './module.service';

@Module({
  imports: [],
  controllers: [ModuleDController],
  providers: [ModuleDService, ModuleDResolver],
})
export class ModuleD {}
