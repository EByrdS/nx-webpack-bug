import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ModuleCEntity {
  @Field(() => Int)
  id: number;
  
  @Field()
  foo: string;
}
