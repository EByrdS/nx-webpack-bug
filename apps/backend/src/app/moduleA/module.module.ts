import { Module } from '@nestjs/common';

import { ModuleAController } from './module.controller';
import { ModuleAResolver } from './module.resolver';
import { ModuleAService } from './module.service';

@Module({
  imports: [],
  controllers: [ModuleAController],
  providers: [ModuleAService, ModuleAResolver],
})
export class ModuleA {}
