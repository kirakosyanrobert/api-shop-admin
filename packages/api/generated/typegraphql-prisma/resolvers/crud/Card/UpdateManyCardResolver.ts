import * as TypeGraphQL from "type-graphql";
import { UpdateManyCardArgs } from "./args/UpdateManyCardArgs";
import { Card } from "../../../models/Card";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Card)
export class UpdateManyCardResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyCard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCardArgs): Promise<BatchPayload> {
    return ctx.prisma.card.updateMany(args);
  }
}
