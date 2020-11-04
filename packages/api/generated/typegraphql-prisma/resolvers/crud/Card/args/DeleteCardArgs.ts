import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { CardWhereUniqueInput } from "../../../inputs/CardWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteCardArgs {
  @TypeGraphQL.Field(_type => CardWhereUniqueInput, { nullable: false })
  where!: CardWhereUniqueInput;
}
