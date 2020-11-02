import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AddressUpdateInput } from "../../../inputs/AddressUpdateInput";
import { AddressWhereUniqueInput } from "../../../inputs/AddressWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateAddressArgs {
  @TypeGraphQL.Field(_type => AddressUpdateInput, { nullable: false })
  data!: AddressUpdateInput;

  @TypeGraphQL.Field(_type => AddressWhereUniqueInput, { nullable: false })
  where!: AddressWhereUniqueInput;
}
