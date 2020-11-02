import * as TypeGraphQL from "type-graphql";
import { UpdateSocialArgs } from "./args/UpdateSocialArgs";
import { Social } from "../../../models/Social";

@TypeGraphQL.Resolver(_of => Social)
export class UpdateSocialResolver {
  @TypeGraphQL.Mutation(_returns => Social, {
    nullable: true,
    description: undefined
  })
  async updateSocial(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateSocialArgs): Promise<Social | null> {
    return ctx.prisma.social.update(args);
  }
}
