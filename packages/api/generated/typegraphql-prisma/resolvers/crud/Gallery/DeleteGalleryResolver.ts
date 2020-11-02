import * as TypeGraphQL from "type-graphql";
import { DeleteGalleryArgs } from "./args/DeleteGalleryArgs";
import { Gallery } from "../../../models/Gallery";

@TypeGraphQL.Resolver(_of => Gallery)
export class DeleteGalleryResolver {
  @TypeGraphQL.Mutation(_returns => Gallery, {
    nullable: true,
    description: undefined
  })
  async deleteGallery(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteGalleryArgs): Promise<Gallery | null> {
    return ctx.prisma.gallery.delete(args);
  }
}
