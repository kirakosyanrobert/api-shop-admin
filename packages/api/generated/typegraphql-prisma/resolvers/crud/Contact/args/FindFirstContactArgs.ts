import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ContactOrderByInput } from "../../../inputs/ContactOrderByInput";
import { ContactWhereInput } from "../../../inputs/ContactWhereInput";
import { ContactWhereUniqueInput } from "../../../inputs/ContactWhereUniqueInput";
import { ContactDistinctFieldEnum } from "../../../../enums/ContactDistinctFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstContactArgs {
  @TypeGraphQL.Field(_type => ContactWhereInput, { nullable: true })
  where?: ContactWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ContactOrderByInput], { nullable: true })
  orderBy?: ContactOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => ContactWhereUniqueInput, { nullable: true })
  cursor?: ContactWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ContactDistinctFieldEnum], { nullable: true })
  distinct?: Array<"id" | "type" | "number" | "userId"> | undefined;
}
