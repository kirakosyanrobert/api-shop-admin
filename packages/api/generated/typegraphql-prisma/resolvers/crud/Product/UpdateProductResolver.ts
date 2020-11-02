import * as TypeGraphQL from "type-graphql";
import { UpdateProductArgs } from "./args/UpdateProductArgs";
import { Product } from "../../../models/Product";

@TypeGraphQL.Resolver(_of => Product)
export class UpdateProductResolver {
  @TypeGraphQL.Mutation(_returns => Product, {
    nullable: true,
    description: undefined
  })
  async updateProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateProductArgs): Promise<Product | null> {
    return ctx.prisma.product.update(args);
  }
}
