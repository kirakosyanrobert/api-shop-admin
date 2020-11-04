import * as TypeGraphQL from "type-graphql";
import { FindOneMetaArgs } from "./args/FindOneMetaArgs";
import { Meta } from "../../../models/Meta";

@TypeGraphQL.Resolver(_of => Meta)
export class FindOneMetaResolver {
  @TypeGraphQL.Query(_returns => Meta, {
    nullable: true,
    description: undefined
  })
  async meta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneMetaArgs): Promise<Meta | null> {
    return ctx.prisma.meta.findOne(args);
  }
}
