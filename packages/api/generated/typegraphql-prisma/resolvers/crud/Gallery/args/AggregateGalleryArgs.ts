import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { GalleryOrderByInput } from "../../../inputs/GalleryOrderByInput";
import { GalleryWhereInput } from "../../../inputs/GalleryWhereInput";
import { GalleryWhereUniqueInput } from "../../../inputs/GalleryWhereUniqueInput";
import { GalleryDistinctFieldEnum } from "../../../../enums/GalleryDistinctFieldEnum";

@TypeGraphQL.ArgsType()
export class AggregateGalleryArgs {
  @TypeGraphQL.Field(_type => GalleryWhereInput, { nullable: true })
  where?: GalleryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GalleryOrderByInput], { nullable: true })
  orderBy?: GalleryOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => GalleryWhereUniqueInput, { nullable: true })
  cursor?: GalleryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [GalleryDistinctFieldEnum], { nullable: true })
  distinct?: Array<"id" | "url" | "productId"> | undefined;
}
