import * as TypeGraphQL from "type-graphql";
import { FindOneContactArgs } from "./args/FindOneContactArgs";
import { Contact } from "../../../models/Contact";

@TypeGraphQL.Resolver(_of => Contact)
export class FindOneContactResolver {
  @TypeGraphQL.Query(_returns => Contact, {
    nullable: true,
    description: undefined
  })
  async contact(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneContactArgs): Promise<Contact | null> {
    return ctx.prisma.contact.findOne(args);
  }
}
