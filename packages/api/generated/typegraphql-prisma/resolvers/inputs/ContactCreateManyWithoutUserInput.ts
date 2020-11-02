import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ContactCreateWithoutUserInput } from "../inputs/ContactCreateWithoutUserInput";
import { ContactWhereUniqueInput } from "../inputs/ContactWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContactCreateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ContactCreateWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  create?: ContactCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContactWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: ContactWhereUniqueInput[] | undefined;
}
