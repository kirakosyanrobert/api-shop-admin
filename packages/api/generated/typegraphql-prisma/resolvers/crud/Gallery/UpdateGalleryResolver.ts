import * as TypeGraphQL from "type-graphql";
import { UpdateGalleryArgs } from "./args/UpdateGalleryArgs";
import { Gallery } from "../../../models/Gallery";

@TypeGraphQL.Resolver(_of => Gallery)
export class UpdateGalleryResolver {
  @TypeGraphQL.Mutation(_returns => Gallery, {
    nullable: true,
    description: undefined
  })
  async updateGallery(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateGalleryArgs): Promise<Gallery | null> {
    return ctx.prisma.gallery.update(args);
  }
}
