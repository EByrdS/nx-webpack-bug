import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ModuleFEntity {
  @Field(() => Int)
  id: number;
  
  @Field()
  foo: string;
}
