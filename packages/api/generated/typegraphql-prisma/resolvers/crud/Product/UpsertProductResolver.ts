import * as TypeGraphQL from "type-graphql";
import { UpsertProductArgs } from "./args/UpsertProductArgs";
import { Product } from "../../../models/Product";

@TypeGraphQL.Resolver(_of => Product)
export class UpsertProductResolver {
  @TypeGraphQL.Mutation(_returns => Product, {
    nullable: false,
    description: undefined
  })
  async upsertProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertProductArgs): Promise<Product> {
    return ctx.prisma.product.upsert(args);
  }
}
