import * as TypeGraphQL from "type-graphql";
import { UpsertMetaArgs } from "./args/UpsertMetaArgs";
import { Meta } from "../../../models/Meta";

@TypeGraphQL.Resolver(_of => Meta)
export class UpsertMetaResolver {
  @TypeGraphQL.Mutation(_returns => Meta, {
    nullable: false,
    description: undefined
  })
  async upsertMeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertMetaArgs): Promise<Meta> {
    return ctx.prisma.meta.upsert(args);
  }
}
