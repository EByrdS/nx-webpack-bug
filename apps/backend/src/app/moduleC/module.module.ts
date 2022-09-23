import { Module } from '@nestjs/common';

import { ModuleCController } from './module.controller';
import { ModuleCResolver } from './module.resolver';
import { ModuleCService } from './module.service';

@Module({
  imports: [],
  controllers: [ModuleCController],
  providers: [ModuleCService, ModuleCResolver],
})
export class ModuleC {}
