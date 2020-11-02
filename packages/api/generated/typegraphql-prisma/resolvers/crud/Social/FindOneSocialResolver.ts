import * as TypeGraphQL from "type-graphql";
import { FindOneSocialArgs } from "./args/FindOneSocialArgs";
import { Social } from "../../../models/Social";

@TypeGraphQL.Resolver(_of => Social)
export class FindOneSocialResolver {
  @TypeGraphQL.Query(_returns => Social, {
    nullable: true,
    description: undefined
  })
  async social(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneSocialArgs): Promise<Social | null> {
    return ctx.prisma.social.findOne(args);
  }
}
