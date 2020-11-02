import * as TypeGraphQL from "type-graphql";
import { DeleteManySocialArgs } from "./args/DeleteManySocialArgs";
import { Social } from "../../../models/Social";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Social)
export class DeleteManySocialResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManySocial(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManySocialArgs): Promise<BatchPayload> {
    return ctx.prisma.social.deleteMany(args);
  }
}
