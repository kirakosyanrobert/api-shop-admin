import * as TypeGraphQL from "type-graphql";
import { DeleteContactArgs } from "./args/DeleteContactArgs";
import { Contact } from "../../../models/Contact";

@TypeGraphQL.Resolver(_of => Contact)
export class DeleteContactResolver {
  @TypeGraphQL.Mutation(_returns => Contact, {
    nullable: true,
    description: undefined
  })
  async deleteContact(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteContactArgs): Promise<Contact | null> {
    return ctx.prisma.contact.delete(args);
  }
}
