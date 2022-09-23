import { Query, Args, Int, Resolver } from "@nestjs/graphql";
import { ModuleBService } from "./module.service";
import { ModuleBEntity } from "./module.entity";

@Resolver(() => ModuleBEntity)
export class ModuleBResolver {
  constructor(
    private readonly service: ModuleBService,
  ) {}

  @Query(() => ModuleBEntity)
  moduleBQuery(
    @Args('id', { type: () => Int })
    id: number
  ) {
    return this.service.getEntity(id);
  }
}
