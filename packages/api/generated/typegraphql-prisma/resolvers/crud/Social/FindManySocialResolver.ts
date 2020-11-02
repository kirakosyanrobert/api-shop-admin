import * as TypeGraphQL from "type-graphql";
import { FindManySocialArgs } from "./args/FindManySocialArgs";
import { Social } from "../../../models/Social";

@TypeGraphQL.Resolver(_of => Social)
export class FindManySocialResolver {
  @TypeGraphQL.Query(_returns => [Social], {
    nullable: false,
    description: undefined
  })
  async socials(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManySocialArgs): Promise<Social[]> {
    return ctx.prisma.social.findMany(args);
  }
}
