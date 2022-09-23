import { Module } from '@nestjs/common';

import { ModuleFController } from './module.controller';
import { ModuleFService } from './module.service';

@Module({
  imports: [],
  controllers: [ModuleFController],
  providers: [ModuleFService],
})
export class ModuleF {}
