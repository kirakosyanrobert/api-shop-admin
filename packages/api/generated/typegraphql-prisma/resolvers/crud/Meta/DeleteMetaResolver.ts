import * as TypeGraphQL from "type-graphql";
import { DeleteMetaArgs } from "./args/DeleteMetaArgs";
import { Meta } from "../../../models/Meta";

@TypeGraphQL.Resolver(_of => Meta)
export class DeleteMetaResolver {
  @TypeGraphQL.Mutation(_returns => Meta, {
    nullable: true,
    description: undefined
  })
  async deleteMeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteMetaArgs): Promise<Meta | null> {
    return ctx.prisma.meta.delete(args);
  }
}
