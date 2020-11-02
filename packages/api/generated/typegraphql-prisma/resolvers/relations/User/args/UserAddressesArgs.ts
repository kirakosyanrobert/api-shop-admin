import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AddressOrderByInput } from "../../../inputs/AddressOrderByInput";
import { AddressWhereInput } from "../../../inputs/AddressWhereInput";
import { AddressWhereUniqueInput } from "../../../inputs/AddressWhereUniqueInput";
import { AddressDistinctFieldEnum } from "../../../../enums/AddressDistinctFieldEnum";

@TypeGraphQL.ArgsType()
export class UserAddressesArgs {
  @TypeGraphQL.Field(_type => AddressWhereInput, { nullable: true })
  where?: AddressWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AddressOrderByInput], { nullable: true })
  orderBy?: AddressOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => AddressWhereUniqueInput, { nullable: true })
  cursor?: AddressWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [AddressDistinctFieldEnum], { nullable: true })
  distinct?: Array<"id" | "type" | "title" | "location" | "userId"> | undefined;
}
