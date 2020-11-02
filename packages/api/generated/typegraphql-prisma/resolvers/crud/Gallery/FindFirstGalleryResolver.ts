import * as TypeGraphQL from "type-graphql";
import { FindFirstGalleryArgs } from "./args/FindFirstGalleryArgs";
import { Gallery } from "../../../models/Gallery";

@TypeGraphQL.Resolver(_of => Gallery)
export class FindFirstGalleryResolver {
  @TypeGraphQL.Query(_returns => Gallery, {
    nullable: true,
    description: undefined
  })
  async findFirstGallery(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstGalleryArgs): Promise<Gallery | null> {
    return ctx.prisma.gallery.findFirst(args);
  }
}
