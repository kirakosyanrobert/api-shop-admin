import * as TypeGraphQL from "type-graphql";
import { UpdateMetaArgs } from "./args/UpdateMetaArgs";
import { Meta } from "../../../models/Meta";

@TypeGraphQL.Resolver(_of => Meta)
export class UpdateMetaResolver {
  @TypeGraphQL.Mutation(_returns => Meta, {
    nullable: true,
    description: undefined
  })
  async updateMeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateMetaArgs): Promise<Meta | null> {
    return ctx.prisma.meta.update(args);
  }
}
