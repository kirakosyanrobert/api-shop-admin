import * as TypeGraphQL from "type-graphql";
import { FindOneCardArgs } from "./args/FindOneCardArgs";
import { Card } from "../../../models/Card";

@TypeGraphQL.Resolver(_of => Card)
export class FindOneCardResolver {
  @TypeGraphQL.Query(_returns => Card, {
    nullable: true,
    description: undefined
  })
  async card(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneCardArgs): Promise<Card | null> {
    return ctx.prisma.card.findOne(args);
  }
}
