import { Query, Args, Int, Resolver } from "@nestjs/graphql";
import { ModuleCService } from "./module.service";
import { ModuleCEntity } from "./module.entity";

@Resolver(() => ModuleCEntity)
export class ModuleCResolver {
  constructor(
    private readonly service: ModuleCService,
  ) {}

  @Query(() => ModuleCEntity)
  moduleCQuery(
    @Args('id', { type: () => Int })
    id: number
  ) {
    return this.service.getEntity(id);
  }
}
