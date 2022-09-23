import { Module } from '@nestjs/common';

import { ModuleIController } from './module.controller';
import { ModuleIService } from './module.service';

@Module({
  imports: [],
  controllers: [ModuleIController],
  providers: [ModuleIService],
})
export class ModuleI {}
