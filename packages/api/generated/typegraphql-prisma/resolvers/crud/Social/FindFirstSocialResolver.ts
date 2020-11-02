import * as TypeGraphQL from "type-graphql";
import { FindFirstSocialArgs } from "./args/FindFirstSocialArgs";
import { Social } from "../../../models/Social";

@TypeGraphQL.Resolver(_of => Social)
export class FindFirstSocialResolver {
  @TypeGraphQL.Query(_returns => Social, {
    nullable: true,
    description: undefined
  })
  async findFirstSocial(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstSocialArgs): Promise<Social | null> {
    return ctx.prisma.social.findFirst(args);
  }
}
