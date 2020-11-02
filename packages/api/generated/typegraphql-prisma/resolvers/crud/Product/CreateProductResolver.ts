import * as TypeGraphQL from "type-graphql";
import { CreateProductArgs } from "./args/CreateProductArgs";
import { Product } from "../../../models/Product";

@TypeGraphQL.Resolver(_of => Product)
export class CreateProductResolver {
  @TypeGraphQL.Mutation(_returns => Product, {
    nullable: false,
    description: undefined
  })
  async createProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateProductArgs): Promise<Product> {
    return ctx.prisma.product.create(args);
  }
}
