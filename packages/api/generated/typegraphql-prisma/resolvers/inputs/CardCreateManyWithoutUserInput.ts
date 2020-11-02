import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { CardCreateWithoutUserInput } from "../inputs/CardCreateWithoutUserInput";
import { CardWhereUniqueInput } from "../inputs/CardWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CardCreateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [CardCreateWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  create?: CardCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CardWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: CardWhereUniqueInput[] | undefined;
}
