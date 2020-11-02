import * as TypeGraphQL from "type-graphql";
import { UpsertSocialArgs } from "./args/UpsertSocialArgs";
import { Social } from "../../../models/Social";

@TypeGraphQL.Resolver(_of => Social)
export class UpsertSocialResolver {
  @TypeGraphQL.Mutation(_returns => Social, {
    nullable: false,
    description: undefined
  })
  async upsertSocial(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertSocialArgs): Promise<Social> {
    return ctx.prisma.social.upsert(args);
  }
}
