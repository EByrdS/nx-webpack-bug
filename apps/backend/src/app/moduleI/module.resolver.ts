import { Query, Args, Int, Resolver } from "@nestjs/graphql";
import { ModuleIService } from "./module.service";
import { ModuleIEntity } from "./module.entity";

@Resolver(() => ModuleIEntity)
export class ModuleIResolver {
  constructor(
    private readonly service: ModuleIService,
  ) {}

  @Query(() => ModuleIEntity)
  moduleIQuery(
    @Args('id', { type: () => Int })
    id: number
  ) {
    return this.service.getEntity(id);
  }
}
