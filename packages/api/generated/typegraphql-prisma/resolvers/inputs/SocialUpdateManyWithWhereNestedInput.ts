import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { SocialScalarWhereInput } from "../inputs/SocialScalarWhereInput";
import { SocialUpdateManyDataInput } from "../inputs/SocialUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SocialUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field(_type => SocialScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: SocialScalarWhereInput;

  @TypeGraphQL.Field(_type => SocialUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: SocialUpdateManyDataInput;
}
