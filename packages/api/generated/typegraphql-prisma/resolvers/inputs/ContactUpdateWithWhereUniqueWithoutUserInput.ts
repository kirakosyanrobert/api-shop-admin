import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ContactUpdateWithoutUserDataInput } from "../inputs/ContactUpdateWithoutUserDataInput";
import { ContactWhereUniqueInput } from "../inputs/ContactWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContactUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ContactWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: ContactWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContactUpdateWithoutUserDataInput, {
    nullable: false,
    description: undefined
  })
  data!: ContactUpdateWithoutUserDataInput;
}
