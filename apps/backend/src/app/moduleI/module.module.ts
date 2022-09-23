import { Module } from '@nestjs/common';

import { ModuleIController } from './module.controller';
import { ModuleIResolver } from './module.resolver';
import { ModuleIService } from './module.service';

@Module({
  imports: [],
  controllers: [ModuleIController],
  providers: [ModuleIService, ModuleIResolver],
})
export class ModuleI {}
