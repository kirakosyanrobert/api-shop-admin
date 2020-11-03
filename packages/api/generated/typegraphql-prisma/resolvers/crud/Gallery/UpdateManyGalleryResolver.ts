import * as TypeGraphQL from "type-graphql";
import { UpdateManyGalleryArgs } from "./args/UpdateManyGalleryArgs";
import { Gallery } from "../../../models/Gallery";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Gallery)
export class UpdateManyGalleryResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyGallery(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyGalleryArgs): Promise<BatchPayload> {
    return ctx.prisma.gallery.updateMany(args);
  }
}
