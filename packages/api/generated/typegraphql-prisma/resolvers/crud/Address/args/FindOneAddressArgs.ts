import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AddressWhereUniqueInput } from "../../../inputs/AddressWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindOneAddressArgs {
  @TypeGraphQL.Field(_type => AddressWhereUniqueInput, { nullable: false })
  where!: AddressWhereUniqueInput;
}
