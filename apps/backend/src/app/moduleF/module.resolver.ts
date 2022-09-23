import { Query, Args, Int, Resolver } from "@nestjs/graphql";
import { ModuleFService } from "./module.service";
import { ModuleFEntity } from "./module.entity";

@Resolver(() => ModuleFEntity)
export class ModuleFResolver {
  constructor(
    private readonly service: ModuleFService,
  ) {}

  @Query(() => ModuleFEntity)
  moduleFQuery(
    @Args('id', { type: () => Int })
    id: number
  ) {
    return this.service.getEntity(id);
  }
}
