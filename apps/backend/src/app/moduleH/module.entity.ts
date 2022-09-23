import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ModuleHEntity {
  @Field(() => Int)
  id: number;
  
  @Field()
  foo: string;
}
