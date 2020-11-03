import * as TypeGraphQL from "type-graphql";
import { FindOneProductArgs } from "./args/FindOneProductArgs";
import { Product } from "../../../models/Product";

@TypeGraphQL.Resolver(_of => Product)
export class FindOneProductResolver {
  @TypeGraphQL.Query(_returns => Product, {
    nullable: true,
    description: undefined
  })
  async product(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneProductArgs): Promise<Product | null> {
    return ctx.prisma.product.findOne(args);
  }
}
