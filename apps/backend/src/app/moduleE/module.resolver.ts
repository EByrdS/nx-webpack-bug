import { Query, Args, Int, Resolver } from "@nestjs/graphql";
import { ModuleEService } from "./module.service";
import { ModuleEEntity } from "./module.entity";

@Resolver(() => ModuleEEntity)
export class ModuleEResolver {
  constructor(
    private readonly service: ModuleEService,
  ) {}

  @Query(() => ModuleEEntity)
  moduleEQuery(
    @Args('id', { type: () => Int })
    id: number
  ) {
    return this.service.getEntity(id);
  }
}
