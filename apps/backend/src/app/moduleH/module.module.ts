import { Module } from '@nestjs/common';

import { ModuleHController } from './module.controller';
import { ModuleHService } from './module.service';

@Module({
  imports: [],
  controllers: [ModuleHController],
  providers: [ModuleHService],
})
export class ModuleH {}
