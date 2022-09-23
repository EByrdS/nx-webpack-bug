import { Module } from '@nestjs/common';

import { ModuleEController } from './module.controller';
import { ModuleEService } from './module.service';

@Module({
  imports: [],
  controllers: [ModuleEController],
  providers: [ModuleEService],
})
export class ModuleE {}
