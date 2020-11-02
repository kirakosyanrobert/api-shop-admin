import * as TypeGraphQL from "type-graphql";
import { Address } from "../../../models/Address";
import { Card } from "../../../models/Card";
import { Contact } from "../../../models/Contact";
import { User } from "../../../models/User";
import { UserAddressesArgs } from "./args/UserAddressesArgs";
import { UserCardArgs } from "./args/UserCardArgs";
import { UserContactsArgs } from "./args/UserContactsArgs";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Address], {
    nullable: true,
    description: undefined,
  })
  async addresses(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserAddressesArgs): Promise<Address[] | null> {
    return ctx.prisma.user.findOne({
      where: {
        id: user.id,
      },
    }).addresses(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Contact], {
    nullable: true,
    description: undefined,
  })
  async contacts(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserContactsArgs): Promise<Contact[] | null> {
    return ctx.prisma.user.findOne({
      where: {
        id: user.id,
      },
    }).contacts(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Card], {
    nullable: true,
    description: undefined,
  })
  async card(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserCardArgs): Promise<Card[] | null> {
    return ctx.prisma.user.findOne({
      where: {
        id: user.id,
      },
    }).card(args);
  }
}
