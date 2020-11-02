import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ContactCreateWithoutUserInput } from "../inputs/ContactCreateWithoutUserInput";
import { ContactUpdateWithoutUserDataInput } from "../inputs/ContactUpdateWithoutUserDataInput";
import { ContactWhereUniqueInput } from "../inputs/ContactWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContactUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ContactWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: ContactWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContactUpdateWithoutUserDataInput, {
    nullable: false,
    description: undefined
  })
  update!: ContactUpdateWithoutUserDataInput;

  @TypeGraphQL.Field(_type => ContactCreateWithoutUserInput, {
    nullable: false,
    description: undefined
  })
  create!: ContactCreateWithoutUserInput;
}
