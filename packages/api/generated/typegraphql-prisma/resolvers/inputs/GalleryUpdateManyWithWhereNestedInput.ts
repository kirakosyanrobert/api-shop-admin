import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { GalleryScalarWhereInput } from "../inputs/GalleryScalarWhereInput";
import { GalleryUpdateManyDataInput } from "../inputs/GalleryUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class GalleryUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field(_type => GalleryScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: GalleryScalarWhereInput;

  @TypeGraphQL.Field(_type => GalleryUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: GalleryUpdateManyDataInput;
}
