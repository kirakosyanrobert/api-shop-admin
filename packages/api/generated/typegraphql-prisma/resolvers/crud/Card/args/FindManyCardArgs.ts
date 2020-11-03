import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { CardOrderByInput } from "../../../inputs/CardOrderByInput";
import { CardWhereInput } from "../../../inputs/CardWhereInput";
import { CardWhereUniqueInput } from "../../../inputs/CardWhereUniqueInput";
import { CardDistinctFieldEnum } from "../../../../enums/CardDistinctFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyCardArgs {
  @TypeGraphQL.Field(_type => CardWhereInput, { nullable: true })
  where?: CardWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CardOrderByInput], { nullable: true })
  orderBy?: CardOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => CardWhereUniqueInput, { nullable: true })
  cursor?: CardWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CardDistinctFieldEnum], { nullable: true })
  distinct?: Array<"id" | "type" | "title" | "cardType" | "lastFourDigit" | "userId"> | undefined;
}
