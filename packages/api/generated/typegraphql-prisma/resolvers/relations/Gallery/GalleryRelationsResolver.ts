import * as TypeGraphQL from "type-graphql";
import { Gallery } from "../../../models/Gallery";
import { Product } from "../../../models/Product";

@TypeGraphQL.Resolver(_of => Gallery)
export class GalleryRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Product, {
    nullable: false,
    description: undefined,
  })
  async product(@TypeGraphQL.Root() gallery: Gallery, @TypeGraphQL.Ctx() ctx: any): Promise<Product> {
    return ctx.prisma.gallery.findOne({
      where: {
        id: gallery.id,
      },
    }).product({});
  }
}
