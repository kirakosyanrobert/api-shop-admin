import * as TypeGraphQL from "type-graphql";
import { UpdateManyAddressArgs } from "./args/UpdateManyAddressArgs";
import { Address } from "../../../models/Address";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Address)
export class UpdateManyAddressResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyAddress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyAddressArgs): Promise<BatchPayload> {
    return ctx.prisma.address.updateMany(args);
  }
}
