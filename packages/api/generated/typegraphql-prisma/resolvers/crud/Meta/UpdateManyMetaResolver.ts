import * as TypeGraphQL from "type-graphql";
import { UpdateManyMetaArgs } from "./args/UpdateManyMetaArgs";
import { Meta } from "../../../models/Meta";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Meta)
export class UpdateManyMetaResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyMeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyMetaArgs): Promise<BatchPayload> {
    return ctx.prisma.meta.updateMany(args);
  }
}
