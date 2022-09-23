import { Module } from '@nestjs/common';

import { ModuleCController } from './module.controller';
import { ModuleCService } from './module.service';

@Module({
  imports: [],
  controllers: [ModuleCController],
  providers: [ModuleCService],
})
export class ModuleC {}
