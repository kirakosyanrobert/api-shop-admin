import * as TypeGraphQL from "type-graphql";
import { DeleteManyContactArgs } from "./args/DeleteManyContactArgs";
import { Contact } from "../../../models/Contact";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Contact)
export class DeleteManyContactResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyContact(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyContactArgs): Promise<BatchPayload> {
    return ctx.prisma.contact.deleteMany(args);
  }
}
