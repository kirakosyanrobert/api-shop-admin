import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { GalleryWhereInput } from "../../../inputs/GalleryWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyGalleryArgs {
  @TypeGraphQL.Field(_type => GalleryWhereInput, { nullable: true })
  where?: GalleryWhereInput | undefined;
}
