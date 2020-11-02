import * as TypeGraphQL from "type-graphql";
import { Address } from "../../../models/Address";
import { User } from "../../../models/User";

@TypeGraphQL.Resolver(_of => Address)
export class AddressRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false,
    description: undefined,
  })
  async user(@TypeGraphQL.Root() address: Address, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return ctx.prisma.address.findOne({
      where: {
        id: address.id,
      },
    }).user({});
  }
}
