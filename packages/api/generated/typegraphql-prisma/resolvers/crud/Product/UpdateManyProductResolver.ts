import * as TypeGraphQL from "type-graphql";
import { UpdateManyProductArgs } from "./args/UpdateManyProductArgs";
import { Product } from "../../../models/Product";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Product)
export class UpdateManyProductResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyProductArgs): Promise<BatchPayload> {
    return ctx.prisma.product.updateMany(args);
  }
}
