import { Module } from '@nestjs/common';

import { ModuleBController } from './module.controller';
import { ModuleBService } from './module.service';

@Module({
  imports: [],
  controllers: [ModuleBController],
  providers: [ModuleBService],
})
export class ModuleB {}
