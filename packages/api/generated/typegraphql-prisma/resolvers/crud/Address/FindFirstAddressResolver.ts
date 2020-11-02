import * as TypeGraphQL from "type-graphql";
import { FindFirstAddressArgs } from "./args/FindFirstAddressArgs";
import { Address } from "../../../models/Address";

@TypeGraphQL.Resolver(_of => Address)
export class FindFirstAddressResolver {
  @TypeGraphQL.Query(_returns => Address, {
    nullable: true,
    description: undefined
  })
  async findFirstAddress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstAddressArgs): Promise<Address | null> {
    return ctx.prisma.address.findFirst(args);
  }
}
