import * as TypeGraphQL from "type-graphql";
import { UpdateManyContactArgs } from "./args/UpdateManyContactArgs";
import { Contact } from "../../../models/Contact";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Contact)
export class UpdateManyContactResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyContact(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyContactArgs): Promise<BatchPayload> {
    return ctx.prisma.contact.updateMany(args);
  }
}
