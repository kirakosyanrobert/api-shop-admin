import * as TypeGraphQL from "type-graphql";
import { DeleteManyAddressArgs } from "./args/DeleteManyAddressArgs";
import { Address } from "../../../models/Address";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Address)
export class DeleteManyAddressResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyAddress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyAddressArgs): Promise<BatchPayload> {
    return ctx.prisma.address.deleteMany(args);
  }
}
