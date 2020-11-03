import * as TypeGraphQL from "type-graphql";
import { CreateSocialArgs } from "./args/CreateSocialArgs";
import { Social } from "../../../models/Social";

@TypeGraphQL.Resolver(_of => Social)
export class CreateSocialResolver {
  @TypeGraphQL.Mutation(_returns => Social, {
    nullable: false,
    description: undefined
  })
  async createSocial(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateSocialArgs): Promise<Social> {
    return ctx.prisma.social.create(args);
  }
}
