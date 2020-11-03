import * as TypeGraphQL from "type-graphql";
import { Meta } from "../../../models/Meta";
import { Product } from "../../../models/Product";

@TypeGraphQL.Resolver(_of => Meta)
export class MetaRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Product, {
    nullable: false,
    description: undefined,
  })
  async product(@TypeGraphQL.Root() meta: Meta, @TypeGraphQL.Ctx() ctx: any): Promise<Product> {
    return ctx.prisma.meta.findOne({
      where: {
        id: meta.id,
      },
    }).product({});
  }
}
