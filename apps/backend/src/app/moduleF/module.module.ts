import { Module } from '@nestjs/common';

import { ModuleFController } from './module.controller';
import { ModuleFResolver } from './module.resolver';
import { ModuleFService } from './module.service';

@Module({
  imports: [],
  controllers: [ModuleFController],
  providers: [ModuleFService, ModuleFResolver],
})
export class ModuleF {}
