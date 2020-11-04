import * as TypeGraphQL from "type-graphql";
import { FindManyCardArgs } from "./args/FindManyCardArgs";
import { Card } from "../../../models/Card";

@TypeGraphQL.Resolver(_of => Card)
export class FindManyCardResolver {
  @TypeGraphQL.Query(_returns => [Card], {
    nullable: false,
    description: undefined
  })
  async cards(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCardArgs): Promise<Card[]> {
    return ctx.prisma.card.findMany(args);
  }
}
