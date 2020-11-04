import * as TypeGraphQL from "type-graphql";
import { UpsertAddressArgs } from "./args/UpsertAddressArgs";
import { Address } from "../../../models/Address";

@TypeGraphQL.Resolver(_of => Address)
export class UpsertAddressResolver {
  @TypeGraphQL.Mutation(_returns => Address, {
    nullable: false,
    description: undefined
  })
  async upsertAddress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertAddressArgs): Promise<Address> {
    return ctx.prisma.address.upsert(args);
  }
}
