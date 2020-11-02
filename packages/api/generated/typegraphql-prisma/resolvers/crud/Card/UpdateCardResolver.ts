import * as TypeGraphQL from "type-graphql";
import { UpdateCardArgs } from "./args/UpdateCardArgs";
import { Card } from "../../../models/Card";

@TypeGraphQL.Resolver(_of => Card)
export class UpdateCardResolver {
  @TypeGraphQL.Mutation(_returns => Card, {
    nullable: true,
    description: undefined
  })
  async updateCard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCardArgs): Promise<Card | null> {
    return ctx.prisma.card.update(args);
  }
}
