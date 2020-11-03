import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AddressWhereInput } from "../../../inputs/AddressWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAddressArgs {
  @TypeGraphQL.Field(_type => AddressWhereInput, { nullable: true })
  where?: AddressWhereInput | undefined;
}
