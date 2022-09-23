import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ModuleDEntity {
  @Field(() => Int)
  id: number;
  
  @Field()
  foo: string;
}
