import { Module } from '@nestjs/common';

import { ModuleBController } from './module.controller';
import { ModuleBResolver } from './module.resolver';
import { ModuleBService } from './module.service';

@Module({
  imports: [],
  controllers: [ModuleBController],
  providers: [ModuleBService, ModuleBResolver],
})
export class ModuleB {}
