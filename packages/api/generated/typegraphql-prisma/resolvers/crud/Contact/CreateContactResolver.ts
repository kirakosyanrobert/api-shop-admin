import * as TypeGraphQL from "type-graphql";
import { CreateContactArgs } from "./args/CreateContactArgs";
import { Contact } from "../../../models/Contact";

@TypeGraphQL.Resolver(_of => Contact)
export class CreateContactResolver {
  @TypeGraphQL.Mutation(_returns => Contact, {
    nullable: false,
    description: undefined
  })
  async createContact(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateContactArgs): Promise<Contact> {
    return ctx.prisma.contact.create(args);
  }
}
