import * as TypeGraphQL from "type-graphql";
import { FindManyGalleryArgs } from "./args/FindManyGalleryArgs";
import { Gallery } from "../../../models/Gallery";

@TypeGraphQL.Resolver(_of => Gallery)
export class FindManyGalleryResolver {
  @TypeGraphQL.Query(_returns => [Gallery], {
    nullable: false,
    description: undefined
  })
  async galleries(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyGalleryArgs): Promise<Gallery[]> {
    return ctx.prisma.gallery.findMany(args);
  }
}
