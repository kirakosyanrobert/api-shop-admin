import * as TypeGraphQL from "type-graphql";
import { FindOneGalleryArgs } from "./args/FindOneGalleryArgs";
import { Gallery } from "../../../models/Gallery";

@TypeGraphQL.Resolver(_of => Gallery)
export class FindOneGalleryResolver {
  @TypeGraphQL.Query(_returns => Gallery, {
    nullable: true,
    description: undefined
  })
  async gallery(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneGalleryArgs): Promise<Gallery | null> {
    return ctx.prisma.gallery.findOne(args);
  }
}
