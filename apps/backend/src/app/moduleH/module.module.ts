import { Module } from '@nestjs/common';

import { ModuleHController } from './module.controller';
import { ModuleHResolver } from './module.resolver';
import { ModuleHService } from './module.service';

@Module({
  imports: [],
  controllers: [ModuleHController],
  providers: [ModuleHService, ModuleHResolver],
})
export class ModuleH {}
