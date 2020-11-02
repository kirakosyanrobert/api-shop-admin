import * as TypeGraphQL from "type-graphql";
import { FindFirstCardArgs } from "./args/FindFirstCardArgs";
import { Card } from "../../../models/Card";

@TypeGraphQL.Resolver(_of => Card)
export class FindFirstCardResolver {
  @TypeGraphQL.Query(_returns => Card, {
    nullable: true,
    description: undefined
  })
  async findFirstCard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCardArgs): Promise<Card | null> {
    return ctx.prisma.card.findFirst(args);
  }
}
