import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { GalleryUpdateInput } from "../../../inputs/GalleryUpdateInput";
import { GalleryWhereUniqueInput } from "../../../inputs/GalleryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateGalleryArgs {
  @TypeGraphQL.Field(_type => GalleryUpdateInput, { nullable: false })
  data!: GalleryUpdateInput;

  @TypeGraphQL.Field(_type => GalleryWhereUniqueInput, { nullable: false })
  where!: GalleryWhereUniqueInput;
}
