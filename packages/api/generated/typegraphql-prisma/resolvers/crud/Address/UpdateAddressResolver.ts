import * as TypeGraphQL from "type-graphql";
import { UpdateAddressArgs } from "./args/UpdateAddressArgs";
import { Address } from "../../../models/Address";

@TypeGraphQL.Resolver(_of => Address)
export class UpdateAddressResolver {
  @TypeGraphQL.Mutation(_returns => Address, {
    nullable: true,
    description: undefined
  })
  async updateAddress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateAddressArgs): Promise<Address | null> {
    return ctx.prisma.address.update(args);
  }
}
