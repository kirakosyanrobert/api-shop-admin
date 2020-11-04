import * as TypeGraphQL from "type-graphql";
import { FindOneAddressArgs } from "./args/FindOneAddressArgs";
import { Address } from "../../../models/Address";

@TypeGraphQL.Resolver(_of => Address)
export class FindOneAddressResolver {
  @TypeGraphQL.Query(_returns => Address, {
    nullable: true,
    description: undefined
  })
  async address(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneAddressArgs): Promise<Address | null> {
    return ctx.prisma.address.findOne(args);
  }
}
