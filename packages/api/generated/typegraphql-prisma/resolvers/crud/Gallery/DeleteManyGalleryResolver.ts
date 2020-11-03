import * as TypeGraphQL from "type-graphql";
import { DeleteManyGalleryArgs } from "./args/DeleteManyGalleryArgs";
import { Gallery } from "../../../models/Gallery";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Gallery)
export class DeleteManyGalleryResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyGallery(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyGalleryArgs): Promise<BatchPayload> {
    return ctx.prisma.gallery.deleteMany(args);
  }
}
