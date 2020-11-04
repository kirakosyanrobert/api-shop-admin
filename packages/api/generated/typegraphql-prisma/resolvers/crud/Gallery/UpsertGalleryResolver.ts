import * as TypeGraphQL from "type-graphql";
import { UpsertGalleryArgs } from "./args/UpsertGalleryArgs";
import { Gallery } from "../../../models/Gallery";

@TypeGraphQL.Resolver(_of => Gallery)
export class UpsertGalleryResolver {
  @TypeGraphQL.Mutation(_returns => Gallery, {
    nullable: false,
    description: undefined
  })
  async upsertGallery(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertGalleryArgs): Promise<Gallery> {
    return ctx.prisma.gallery.upsert(args);
  }
}
