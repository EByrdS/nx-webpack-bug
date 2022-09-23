import { Module } from '@nestjs/common';

import { ModuleGController } from './module.controller';
import { ModuleGResolver } from './module.resolver';
import { ModuleGService } from './module.service';

@Module({
  imports: [],
  controllers: [ModuleGController],
  providers: [ModuleGService, ModuleGResolver],
})
export class ModuleG {}
