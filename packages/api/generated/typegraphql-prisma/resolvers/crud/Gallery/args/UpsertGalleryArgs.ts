import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { GalleryCreateInput } from "../../../inputs/GalleryCreateInput";
import { GalleryUpdateInput } from "../../../inputs/GalleryUpdateInput";
import { GalleryWhereUniqueInput } from "../../../inputs/GalleryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertGalleryArgs {
  @TypeGraphQL.Field(_type => GalleryWhereUniqueInput, { nullable: false })
  where!: GalleryWhereUniqueInput;

  @TypeGraphQL.Field(_type => GalleryCreateInput, { nullable: false })
  create!: GalleryCreateInput;

  @TypeGraphQL.Field(_type => GalleryUpdateInput, { nullable: false })
  update!: GalleryUpdateInput;
}
