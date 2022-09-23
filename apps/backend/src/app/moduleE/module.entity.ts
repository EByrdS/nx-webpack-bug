import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ModuleEEntity {
  @Field(() => Int)
  id: number;
  
  @Field()
  foo: string;
}
