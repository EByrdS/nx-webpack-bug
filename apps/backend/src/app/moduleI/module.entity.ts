import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ModuleIEntity {
  @Field(() => Int)
  id: number;
  
  @Field()
  foo: string;
}
