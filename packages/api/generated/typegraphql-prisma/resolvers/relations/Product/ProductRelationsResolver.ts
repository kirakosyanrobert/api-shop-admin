import * as TypeGraphQL from "type-graphql";
import { Author } from "../../../models/Author";
import { Category } from "../../../models/Category";
import { Gallery } from "../../../models/Gallery";
import { Meta } from "../../../models/Meta";
import { Product } from "../../../models/Product";
import { ProductCategoriesArgs } from "./args/ProductCategoriesArgs";
import { ProductGalleryArgs } from "./args/ProductGalleryArgs";

@TypeGraphQL.Resolver(_of => Product)
export class ProductRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Author, {
    nullable: true,
    description: undefined,
  })
  async author(@TypeGraphQL.Root() product: Product, @TypeGraphQL.Ctx() ctx: any): Promise<Author | null> {
    return ctx.prisma.product.findOne({
      where: {
        id: product.id,
      },
    }).author({});
  }

  @TypeGraphQL.FieldResolver(_type => Meta, {
    nullable: true,
    description: undefined,
  })
  async meta(@TypeGraphQL.Root() product: Product, @TypeGraphQL.Ctx() ctx: any): Promise<Meta | null> {
    return ctx.prisma.product.findOne({
      where: {
        id: product.id,
      },
    }).meta({});
  }

  @TypeGraphQL.FieldResolver(_type => [Gallery], {
    nullable: true,
    description: undefined,
  })
  async gallery(@TypeGraphQL.Root() product: Product, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProductGalleryArgs): Promise<Gallery[] | null> {
    return ctx.prisma.product.findOne({
      where: {
        id: product.id,
      },
    }).gallery(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Category], {
    nullable: true,
    description: undefined,
  })
  async categories(@TypeGraphQL.Root() product: Product, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProductCategoriesArgs): Promise<Category[] | null> {
    return ctx.prisma.product.findOne({
      where: {
        id: product.id,
      },
    }).categories(args);
  }
}
