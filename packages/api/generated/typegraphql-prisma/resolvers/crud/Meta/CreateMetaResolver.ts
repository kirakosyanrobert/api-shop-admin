import * as TypeGraphQL from "type-graphql";
import { CreateMetaArgs } from "./args/CreateMetaArgs";
import { Meta } from "../../../models/Meta";

@TypeGraphQL.Resolver(_of => Meta)
export class CreateMetaResolver {
  @TypeGraphQL.Mutation(_returns => Meta, {
    nullable: false,
    description: undefined
  })
  async createMeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateMetaArgs): Promise<Meta> {
    return ctx.prisma.meta.create(args);
  }
}
