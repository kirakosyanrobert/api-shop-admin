import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { AddressCreateWithoutUserInput } from "../inputs/AddressCreateWithoutUserInput";
import { AddressWhereUniqueInput } from "../inputs/AddressWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class AddressCreateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [AddressCreateWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  create?: AddressCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [AddressWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: AddressWhereUniqueInput[] | undefined;
}
