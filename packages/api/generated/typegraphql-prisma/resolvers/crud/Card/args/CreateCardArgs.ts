import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { CardCreateInput } from "../../../inputs/CardCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCardArgs {
  @TypeGraphQL.Field(_type => CardCreateInput, { nullable: false })
  data!: CardCreateInput;
}
