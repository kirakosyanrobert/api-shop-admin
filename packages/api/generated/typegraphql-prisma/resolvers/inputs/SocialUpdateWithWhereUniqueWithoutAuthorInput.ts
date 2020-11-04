import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { SocialUpdateWithoutAuthorDataInput } from "../inputs/SocialUpdateWithoutAuthorDataInput";
import { SocialWhereUniqueInput } from "../inputs/SocialWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SocialUpdateWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => SocialWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: SocialWhereUniqueInput;

  @TypeGraphQL.Field(_type => SocialUpdateWithoutAuthorDataInput, {
    nullable: false,
    description: undefined
  })
  data!: SocialUpdateWithoutAuthorDataInput;
}
