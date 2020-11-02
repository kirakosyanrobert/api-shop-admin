import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { GalleryWhereUniqueInput } from "../../../inputs/GalleryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteGalleryArgs {
  @TypeGraphQL.Field(_type => GalleryWhereUniqueInput, { nullable: false })
  where!: GalleryWhereUniqueInput;
}
