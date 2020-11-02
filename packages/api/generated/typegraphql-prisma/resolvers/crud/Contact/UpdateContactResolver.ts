import * as TypeGraphQL from "type-graphql";
import { UpdateContactArgs } from "./args/UpdateContactArgs";
import { Contact } from "../../../models/Contact";

@TypeGraphQL.Resolver(_of => Contact)
export class UpdateContactResolver {
  @TypeGraphQL.Mutation(_returns => Contact, {
    nullable: true,
    description: undefined
  })
  async updateContact(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateContactArgs): Promise<Contact | null> {
    return ctx.prisma.contact.update(args);
  }
}
