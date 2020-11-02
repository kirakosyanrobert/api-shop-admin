import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { GalleryCreateInput } from "../../../inputs/GalleryCreateInput";

@TypeGraphQL.ArgsType()
export class CreateGalleryArgs {
  @TypeGraphQL.Field(_type => GalleryCreateInput, { nullable: false })
  data!: GalleryCreateInput;
}
