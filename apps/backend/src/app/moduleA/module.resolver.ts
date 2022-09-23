import { Query, Args, Int, Resolver } from "@nestjs/graphql";
import { ModuleAService } from "./module.service";
import { ModuleAEntity } from "./module.entity";

@Resolver(() => ModuleAEntity)
export class ModuleAResolver {
  constructor(
    private readonly service: ModuleAService,
  ) {}

  @Query(() => ModuleAEntity)
  moduleAQuery(
    @Args('id', { type: () => Int })
    id: number
  ) {
    return this.service.getEntity(id);
  }
}
