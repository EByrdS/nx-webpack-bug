import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ModuleBEntity {
  @Field()
  foo: string;
}
