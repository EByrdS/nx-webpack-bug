import { Module } from '@nestjs/common';

import { ModuleAController } from './module.controller';
import { ModuleAService } from './module.service';

@Module({
  imports: [],
  controllers: [ModuleAController],
  providers: [ModuleAService],
})
export class ModuleA {}
