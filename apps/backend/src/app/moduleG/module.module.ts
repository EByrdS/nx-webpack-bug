import { Module } from '@nestjs/common';

import { ModuleGController } from './module.controller';
import { ModuleGService } from './module.service';

@Module({
  imports: [],
  controllers: [ModuleGController],
  providers: [ModuleGService],
})
export class ModuleG {}
