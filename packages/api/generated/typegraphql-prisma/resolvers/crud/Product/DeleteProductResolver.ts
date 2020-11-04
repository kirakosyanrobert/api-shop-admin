import * as TypeGraphQL from "type-graphql";
import { DeleteProductArgs } from "./args/DeleteProductArgs";
import { Product } from "../../../models/Product";

@TypeGraphQL.Resolver(_of => Product)
export class DeleteProductResolver {
  @TypeGraphQL.Mutation(_returns => Product, {
    nullable: true,
    description: undefined
  })
  async deleteProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteProductArgs): Promise<Product | null> {
    return ctx.prisma.product.delete(args);
  }
}
