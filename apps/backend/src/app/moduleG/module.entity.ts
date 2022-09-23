import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ModuleGEntity {
  @Field(() => Int)
  id: number;
  
  @Field()
  foo: string;
}
