import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AddressCreateInput } from "../../../inputs/AddressCreateInput";

@TypeGraphQL.ArgsType()
export class CreateAddressArgs {
  @TypeGraphQL.Field(_type => AddressCreateInput, { nullable: false })
  data!: AddressCreateInput;
}
