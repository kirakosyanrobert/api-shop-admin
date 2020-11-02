import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { CardCreateWithoutUserInput } from "../inputs/CardCreateWithoutUserInput";
import { CardUpdateWithoutUserDataInput } from "../inputs/CardUpdateWithoutUserDataInput";
import { CardWhereUniqueInput } from "../inputs/CardWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CardUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => CardWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: CardWhereUniqueInput;

  @TypeGraphQL.Field(_type => CardUpdateWithoutUserDataInput, {
    nullable: false,
    description: undefined
  })
  update!: CardUpdateWithoutUserDataInput;

  @TypeGraphQL.Field(_type => CardCreateWithoutUserInput, {
    nullable: false,
    description: undefined
  })
  create!: CardCreateWithoutUserInput;
}
