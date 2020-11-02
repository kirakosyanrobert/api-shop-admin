import * as TypeGraphQL from "type-graphql";
import { DeleteManyProductArgs } from "./args/DeleteManyProductArgs";
import { Product } from "../../../models/Product";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Product)
export class DeleteManyProductResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyProductArgs): Promise<BatchPayload> {
    return ctx.prisma.product.deleteMany(args);
  }
}
