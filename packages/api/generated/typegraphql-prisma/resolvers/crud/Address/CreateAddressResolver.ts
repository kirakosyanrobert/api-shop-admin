import * as TypeGraphQL from "type-graphql";
import { CreateAddressArgs } from "./args/CreateAddressArgs";
import { Address } from "../../../models/Address";

@TypeGraphQL.Resolver(_of => Address)
export class CreateAddressResolver {
  @TypeGraphQL.Mutation(_returns => Address, {
    nullable: false,
    description: undefined
  })
  async createAddress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateAddressArgs): Promise<Address> {
    return ctx.prisma.address.create(args);
  }
}
