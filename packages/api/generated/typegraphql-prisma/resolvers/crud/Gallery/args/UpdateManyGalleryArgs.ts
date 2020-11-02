import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { GalleryUpdateManyMutationInput } from "../../../inputs/GalleryUpdateManyMutationInput";
import { GalleryWhereInput } from "../../../inputs/GalleryWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyGalleryArgs {
  @TypeGraphQL.Field(_type => GalleryUpdateManyMutationInput, { nullable: false })
  data!: GalleryUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => GalleryWhereInput, { nullable: true })
  where?: GalleryWhereInput | undefined;
}
