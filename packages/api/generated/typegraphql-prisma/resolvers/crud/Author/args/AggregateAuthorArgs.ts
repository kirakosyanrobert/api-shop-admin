import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AuthorOrderByInput } from "../../../inputs/AuthorOrderByInput";
import { AuthorWhereInput } from "../../../inputs/AuthorWhereInput";
import { AuthorWhereUniqueInput } from "../../../inputs/AuthorWhereUniqueInput";
import { AuthorDistinctFieldEnum } from "../../../../enums/AuthorDistinctFieldEnum";

@TypeGraphQL.ArgsType()
export class AggregateAuthorArgs {
  @TypeGraphQL.Field(_type => AuthorWhereInput, { nullable: true })
  where?: AuthorWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AuthorOrderByInput], { nullable: true })
  orderBy?: AuthorOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => AuthorWhereUniqueInput, { nullable: true })
  cursor?: AuthorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [AuthorDistinctFieldEnum], { nullable: true })
  distinct?: Array<"id" | "name" | "avatar" | "bio" | "email" | "website" | "productId"> | undefined;
}
