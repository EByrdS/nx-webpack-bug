import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ModuleAEntity {
  @Field(() => Int)
  id: number;
  
  @Field()
  foo: string;
}
