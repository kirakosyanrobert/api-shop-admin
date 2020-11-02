import * as TypeGraphQL from "type-graphql";
import { DeleteManyMetaArgs } from "./args/DeleteManyMetaArgs";
import { Meta } from "../../../models/Meta";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Meta)
export class DeleteManyMetaResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyMeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyMetaArgs): Promise<BatchPayload> {
    return ctx.prisma.meta.deleteMany(args);
  }
}
