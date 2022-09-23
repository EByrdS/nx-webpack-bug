import { Module } from '@nestjs/common';
import { ModuleBResolver } from './module-b.resolver';

import { ModuleAResolver } from './module.resolver';

@Module({
  imports: [],
  controllers: [],
  providers: [ModuleAResolver, ModuleBResolver],
})
export class ModuleA {}
