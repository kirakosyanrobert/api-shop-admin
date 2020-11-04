import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { MetaOrderByInput } from "../../../inputs/MetaOrderByInput";
import { MetaWhereInput } from "../../../inputs/MetaWhereInput";
import { MetaWhereUniqueInput } from "../../../inputs/MetaWhereUniqueInput";
import { MetaDistinctFieldEnum } from "../../../../enums/MetaDistinctFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyMetaArgs {
  @TypeGraphQL.Field(_type => MetaWhereInput, { nullable: true })
  where?: MetaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MetaOrderByInput], { nullable: true })
  orderBy?: MetaOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => MetaWhereUniqueInput, { nullable: true })
  cursor?: MetaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MetaDistinctFieldEnum], { nullable: true })
  distinct?: Array<"id" | "publisher" | "isbn" | "edition" | "country" | "languages" | "numberOfReader" | "numberOfPage" | "samplePDF" | "productId"> | undefined;
}
