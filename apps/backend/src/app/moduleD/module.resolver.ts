import { Query, Args, Int, Resolver } from "@nestjs/graphql";
import { ModuleDService } from "./module.service";
import { ModuleDEntity } from "./module.entity";

@Resolver(() => ModuleDEntity)
export class ModuleDResolver {
  constructor(
    private readonly service: ModuleDService,
  ) {}

  @Query(() => ModuleDEntity)
  moduleDQuery(
    @Args('id', { type: () => Int })
    id: number
  ) {
    return this.service.getEntity(id);
  }
}
