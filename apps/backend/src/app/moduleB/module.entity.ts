import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ModuleBEntity {
  @Field(() => Int)
  id: number;
  
  @Field()
  foo: string;
}
