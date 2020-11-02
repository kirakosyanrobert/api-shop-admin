import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ContactCreateInput } from "../../../inputs/ContactCreateInput";

@TypeGraphQL.ArgsType()
export class CreateContactArgs {
  @TypeGraphQL.Field(_type => ContactCreateInput, { nullable: false })
  data!: ContactCreateInput;
}
