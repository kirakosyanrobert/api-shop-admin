import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { CardUpdateInput } from "../../../inputs/CardUpdateInput";
import { CardWhereUniqueInput } from "../../../inputs/CardWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCardArgs {
  @TypeGraphQL.Field(_type => CardUpdateInput, { nullable: false })
  data!: CardUpdateInput;

  @TypeGraphQL.Field(_type => CardWhereUniqueInput, { nullable: false })
  where!: CardWhereUniqueInput;
}
