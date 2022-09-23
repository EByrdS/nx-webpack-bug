import { Query, Resolver } from "@nestjs/graphql";
import { ModuleAEntity } from "./module.entity";

@Resolver(() => ModuleAEntity)
export class ModuleAResolver {
  @Query(() => ModuleAEntity)
  moduleAQuery() {
    const entity = new ModuleAEntity();
    entity.foo = 'module-a-entity';
    return entity;
  }
}
