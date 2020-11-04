import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { CardWhereInput } from "../../../inputs/CardWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCardArgs {
  @TypeGraphQL.Field(_type => CardWhereInput, { nullable: true })
  where?: CardWhereInput | undefined;
}
