import * as TypeGraphQL from "type-graphql";
import { FindFirstContactArgs } from "./args/FindFirstContactArgs";
import { Contact } from "../../../models/Contact";

@TypeGraphQL.Resolver(_of => Contact)
export class FindFirstContactResolver {
  @TypeGraphQL.Query(_returns => Contact, {
    nullable: true,
    description: undefined
  })
  async findFirstContact(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstContactArgs): Promise<Contact | null> {
    return ctx.prisma.contact.findFirst(args);
  }
}
