import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ContactWhereInput } from "../../../inputs/ContactWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyContactArgs {
  @TypeGraphQL.Field(_type => ContactWhereInput, { nullable: true })
  where?: ContactWhereInput | undefined;
}
