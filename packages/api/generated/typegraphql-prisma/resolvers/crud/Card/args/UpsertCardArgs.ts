import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { CardCreateInput } from "../../../inputs/CardCreateInput";
import { CardUpdateInput } from "../../../inputs/CardUpdateInput";
import { CardWhereUniqueInput } from "../../../inputs/CardWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCardArgs {
  @TypeGraphQL.Field(_type => CardWhereUniqueInput, { nullable: false })
  where!: CardWhereUniqueInput;

  @TypeGraphQL.Field(_type => CardCreateInput, { nullable: false })
  create!: CardCreateInput;

  @TypeGraphQL.Field(_type => CardUpdateInput, { nullable: false })
  update!: CardUpdateInput;
}
