import * as TypeGraphQL from "type-graphql";
import { DeleteSocialArgs } from "./args/DeleteSocialArgs";
import { Social } from "../../../models/Social";

@TypeGraphQL.Resolver(_of => Social)
export class DeleteSocialResolver {
  @TypeGraphQL.Mutation(_returns => Social, {
    nullable: true,
    description: undefined
  })
  async deleteSocial(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteSocialArgs): Promise<Social | null> {
    return ctx.prisma.social.delete(args);
  }
}
