import * as TypeGraphQL from "type-graphql";
import { UpdateManySocialArgs } from "./args/UpdateManySocialArgs";
import { Social } from "../../../models/Social";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Social)
export class UpdateManySocialResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManySocial(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManySocialArgs): Promise<BatchPayload> {
    return ctx.prisma.social.updateMany(args);
  }
}
