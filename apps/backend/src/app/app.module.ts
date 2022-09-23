import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModuleA } from './moduleA/module.module';
import { ModuleB } from './moduleB/module.module';
import { ModuleC } from './moduleC/module.module';
import { ModuleD } from './moduleD/module.module';
import { ModuleE } from './moduleE/module.module';
import { ModuleF } from './moduleF/module.module';
import { ModuleG } from './moduleG/module.module';
import { ModuleH } from './moduleH/module.module';
import { ModuleI } from './moduleI/module.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
    }),
    ModuleA,
    ModuleB,
    ModuleC,
    ModuleD,
    ModuleE,
    ModuleF,
    ModuleG,
    ModuleH,
    ModuleI,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
