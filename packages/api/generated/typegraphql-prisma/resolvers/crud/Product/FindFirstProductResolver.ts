import * as TypeGraphQL from "type-graphql";
import { FindFirstProductArgs } from "./args/FindFirstProductArgs";
import { Product } from "../../../models/Product";

@TypeGraphQL.Resolver(_of => Product)
export class FindFirstProductResolver {
  @TypeGraphQL.Query(_returns => Product, {
    nullable: true,
    description: undefined
  })
  async findFirstProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstProductArgs): Promise<Product | null> {
    return ctx.prisma.product.findFirst(args);
  }
}
