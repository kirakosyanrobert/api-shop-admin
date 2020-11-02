import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ProductCreateOneWithoutGalleryInput } from "../inputs/ProductCreateOneWithoutGalleryInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class GalleryCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  url!: string;

  @TypeGraphQL.Field(_type => ProductCreateOneWithoutGalleryInput, {
    nullable: false,
    description: undefined
  })
  product!: ProductCreateOneWithoutGalleryInput;
}
