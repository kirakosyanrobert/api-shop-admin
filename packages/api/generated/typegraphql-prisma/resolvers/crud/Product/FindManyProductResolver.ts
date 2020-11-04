import * as TypeGraphQL from "type-graphql";
import { FindManyProductArgs } from "./args/FindManyProductArgs";
import { Product } from "../../../models/Product";

@TypeGraphQL.Resolver(_of => Product)
export class FindManyProductResolver {
  @TypeGraphQL.Query(_returns => [Product], {
    nullable: false,
    description: undefined
  })
  async products(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyProductArgs): Promise<Product[]> {
    return ctx.prisma.product.findMany(args);
  }
}
