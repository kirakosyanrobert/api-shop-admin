import * as TypeGraphQL from "type-graphql";
import { FindFirstMetaArgs } from "./args/FindFirstMetaArgs";
import { Meta } from "../../../models/Meta";

@TypeGraphQL.Resolver(_of => Meta)
export class FindFirstMetaResolver {
  @TypeGraphQL.Query(_returns => Meta, {
    nullable: true,
    description: undefined
  })
  async findFirstMeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstMetaArgs): Promise<Meta | null> {
    return ctx.prisma.meta.findFirst(args);
  }
}
