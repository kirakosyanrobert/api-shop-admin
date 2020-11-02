import * as TypeGraphQL from "type-graphql";
import { Category } from "../../../models/Category";
import { Product } from "../../../models/Product";

@TypeGraphQL.Resolver(_of => Category)
export class CategoryRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Product, {
    nullable: false,
    description: undefined,
  })
  async product(@TypeGraphQL.Root() category: Category, @TypeGraphQL.Ctx() ctx: any): Promise<Product> {
    return ctx.prisma.category.findOne({
      where: {
        id: category.id,
      },
    }).product({});
  }
}
