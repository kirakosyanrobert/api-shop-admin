import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { CardScalarWhereInput } from "../inputs/CardScalarWhereInput";
import { CardUpdateManyDataInput } from "../inputs/CardUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CardUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field(_type => CardScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: CardScalarWhereInput;

  @TypeGraphQL.Field(_type => CardUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: CardUpdateManyDataInput;
}
