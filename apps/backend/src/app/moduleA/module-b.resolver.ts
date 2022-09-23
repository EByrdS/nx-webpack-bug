import { Query, Resolver } from "@nestjs/graphql";
import { ModuleBEntity } from "./module-b.entity";

@Resolver(() => ModuleBEntity)
export class ModuleBResolver {
  @Query(() => ModuleBEntity)
  moduleBQuery() {
    const entity = new ModuleBEntity();
    entity.foo = 'module-b-entity';
    return entity;
  }
}
