import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { AuthorCreateOneWithoutProductInput } from "../inputs/AuthorCreateOneWithoutProductInput";
import { CategoryCreateManyWithoutProductInput } from "../inputs/CategoryCreateManyWithoutProductInput";
import { GalleryCreateManyWithoutProductInput } from "../inputs/GalleryCreateManyWithoutProductInput";
import { ProductType } from "../../enums/ProductType";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductCreateWithoutMetaInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  slug!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  unit!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  image!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  price!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  salePrice!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  discountInPercent!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  per_unit!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  quantity!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  views?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  sales?: number | undefined;

  @TypeGraphQL.Field(_type => ProductType, {
    nullable: false,
    description: undefined
  })
  type!: "BOOK" | "BAGS" | "GROCERY" | "MEDICINE" | "CLOTH" | "CLOTHING" | "FURNITURE" | "FURNITURE_TWO" | "MAKEUP" | "BAKERY";

  @TypeGraphQL.Field(_type => AuthorCreateOneWithoutProductInput, {
    nullable: true,
    description: undefined
  })
  author?: AuthorCreateOneWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => GalleryCreateManyWithoutProductInput, {
    nullable: true,
    description: undefined
  })
  gallery?: GalleryCreateManyWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateManyWithoutProductInput, {
    nullable: true,
    description: undefined
  })
  categories?: CategoryCreateManyWithoutProductInput | undefined;
}
