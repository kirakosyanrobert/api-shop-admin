import * as TypeGraphQL from "type-graphql";
import { DeleteAddressArgs } from "./args/DeleteAddressArgs";
import { Address } from "../../../models/Address";

@TypeGraphQL.Resolver(_of => Address)
export class DeleteAddressResolver {
  @TypeGraphQL.Mutation(_returns => Address, {
    nullable: true,
    description: undefined
  })
  async deleteAddress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteAddressArgs): Promise<Address | null> {
    return ctx.prisma.address.delete(args);
  }
}
