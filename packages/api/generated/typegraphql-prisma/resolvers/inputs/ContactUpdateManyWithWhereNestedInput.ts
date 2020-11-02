import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ContactScalarWhereInput } from "../inputs/ContactScalarWhereInput";
import { ContactUpdateManyDataInput } from "../inputs/ContactUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContactUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field(_type => ContactScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: ContactScalarWhereInput;

  @TypeGraphQL.Field(_type => ContactUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: ContactUpdateManyDataInput;
}
