import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModuleA } from './moduleA/module.module';
// import { ModuleB } from './moduleB/module.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
    ModuleA,
    // ModuleB,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
