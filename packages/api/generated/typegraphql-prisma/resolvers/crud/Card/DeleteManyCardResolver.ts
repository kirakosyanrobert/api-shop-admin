import * as TypeGraphQL from "type-graphql";
import { DeleteManyCardArgs } from "./args/DeleteManyCardArgs";
import { Card } from "../../../models/Card";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Card)
export class DeleteManyCardResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyCard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCardArgs): Promise<BatchPayload> {
    return ctx.prisma.card.deleteMany(args);
  }
}
