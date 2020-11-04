import * as TypeGraphQL from "type-graphql";
import { Contact } from "../../../models/Contact";
import { User } from "../../../models/User";

@TypeGraphQL.Resolver(_of => Contact)
export class ContactRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false,
    description: undefined,
  })
  async user(@TypeGraphQL.Root() contact: Contact, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return ctx.prisma.contact.findOne({
      where: {
        id: contact.id,
      },
    }).user({});
  }
}
