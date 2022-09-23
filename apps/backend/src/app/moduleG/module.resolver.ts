import { Query, Args, Int, Resolver } from "@nestjs/graphql";
import { ModuleGService } from "./module.service";
import { ModuleGEntity } from "./module.entity";

@Resolver(() => ModuleGEntity)
export class ModuleGResolver {
  constructor(
    private readonly service: ModuleGService,
  ) {}

  @Query(() => ModuleGEntity)
  moduleGQuery(
    @Args('id', { type: () => Int })
    id: number
  ) {
    return this.service.getEntity(id);
  }
}
