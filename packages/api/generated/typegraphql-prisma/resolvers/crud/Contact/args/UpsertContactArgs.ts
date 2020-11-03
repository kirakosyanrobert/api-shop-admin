import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ContactCreateInput } from "../../../inputs/ContactCreateInput";
import { ContactUpdateInput } from "../../../inputs/ContactUpdateInput";
import { ContactWhereUniqueInput } from "../../../inputs/ContactWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertContactArgs {
  @TypeGraphQL.Field(_type => ContactWhereUniqueInput, { nullable: false })
  where!: ContactWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContactCreateInput, { nullable: false })
  create!: ContactCreateInput;

  @TypeGraphQL.Field(_type => ContactUpdateInput, { nullable: false })
  update!: ContactUpdateInput;
}
