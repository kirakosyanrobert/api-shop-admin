import * as TypeGraphQL from "type-graphql";
import { CreateGalleryArgs } from "./args/CreateGalleryArgs";
import { Gallery } from "../../../models/Gallery";

@TypeGraphQL.Resolver(_of => Gallery)
export class CreateGalleryResolver {
  @TypeGraphQL.Mutation(_returns => Gallery, {
    nullable: false,
    description: undefined
  })
  async createGallery(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateGalleryArgs): Promise<Gallery> {
    return ctx.prisma.gallery.create(args);
  }
}
