import * as TypeGraphQL from "type-graphql";
import { FindManyAddressArgs } from "./args/FindManyAddressArgs";
import { Address } from "../../../models/Address";

@TypeGraphQL.Resolver(_of => Address)
export class FindManyAddressResolver {
  @TypeGraphQL.Query(_returns => [Address], {
    nullable: false,
    description: undefined
  })
  async addresses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyAddressArgs): Promise<Address[]> {
    return ctx.prisma.address.findMany(args);
  }
}
