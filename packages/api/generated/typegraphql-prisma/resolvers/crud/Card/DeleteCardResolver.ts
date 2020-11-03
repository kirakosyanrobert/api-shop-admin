import * as TypeGraphQL from "type-graphql";
import { DeleteCardArgs } from "./args/DeleteCardArgs";
import { Card } from "../../../models/Card";

@TypeGraphQL.Resolver(_of => Card)
export class DeleteCardResolver {
  @TypeGraphQL.Mutation(_returns => Card, {
    nullable: true,
    description: undefined
  })
  async deleteCard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCardArgs): Promise<Card | null> {
    return ctx.prisma.card.delete(args);
  }
}
