import { Module } from '@nestjs/common';

import { ModuleEController } from './module.controller';
import { ModuleEResolver } from './module.resolver';
import { ModuleEService } from './module.service';

@Module({
  imports: [],
  controllers: [ModuleEController],
  providers: [ModuleEService, ModuleEResolver],
})
export class ModuleE {}
