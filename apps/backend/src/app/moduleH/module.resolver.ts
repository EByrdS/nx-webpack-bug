import { Query, Args, Int, Resolver } from "@nestjs/graphql";
import { ModuleHService } from "./module.service";
import { ModuleHEntity } from "./module.entity";

@Resolver(() => ModuleHEntity)
export class ModuleHResolver {
  constructor(
    private readonly service: ModuleHService,
  ) {}

  @Query(() => ModuleHEntity)
  moduleHQuery(
    @Args('id', { type: () => Int })
    id: number
  ) {
    return this.service.getEntity(id);
  }
}
