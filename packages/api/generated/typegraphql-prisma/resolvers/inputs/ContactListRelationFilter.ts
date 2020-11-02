import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ContactWhereInput } from "../inputs/ContactWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContactListRelationFilter {
  @TypeGraphQL.Field(_type => ContactWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: ContactWhereInput | undefined;

  @TypeGraphQL.Field(_type => ContactWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: ContactWhereInput | undefined;

  @TypeGraphQL.Field(_type => ContactWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: ContactWhereInput | undefined;
}
