import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { CardWhereInput } from "../inputs/CardWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CardListRelationFilter {
  @TypeGraphQL.Field(_type => CardWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: CardWhereInput | undefined;

  @TypeGraphQL.Field(_type => CardWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: CardWhereInput | undefined;

  @TypeGraphQL.Field(_type => CardWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: CardWhereInput | undefined;
}
