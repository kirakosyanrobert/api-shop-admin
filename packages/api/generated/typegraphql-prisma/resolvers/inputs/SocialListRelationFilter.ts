import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { SocialWhereInput } from "../inputs/SocialWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SocialListRelationFilter {
  @TypeGraphQL.Field(_type => SocialWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: SocialWhereInput | undefined;

  @TypeGraphQL.Field(_type => SocialWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: SocialWhereInput | undefined;

  @TypeGraphQL.Field(_type => SocialWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: SocialWhereInput | undefined;
}
