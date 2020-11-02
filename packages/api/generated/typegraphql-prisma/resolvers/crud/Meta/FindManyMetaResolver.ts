import * as TypeGraphQL from "type-graphql";
import { FindManyMetaArgs } from "./args/FindManyMetaArgs";
import { Meta } from "../../../models/Meta";

@TypeGraphQL.Resolver(_of => Meta)
export class FindManyMetaResolver {
  @TypeGraphQL.Query(_returns => [Meta], {
    nullable: false,
    description: undefined
  })
  async metas(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyMetaArgs): Promise<Meta[]> {
    return ctx.prisma.meta.findMany(args);
  }
}
