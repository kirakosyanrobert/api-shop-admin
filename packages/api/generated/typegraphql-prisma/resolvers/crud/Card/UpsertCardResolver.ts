import * as TypeGraphQL from "type-graphql";
import { UpsertCardArgs } from "./args/UpsertCardArgs";
import { Card } from "../../../models/Card";

@TypeGraphQL.Resolver(_of => Card)
export class UpsertCardResolver {
  @TypeGraphQL.Mutation(_returns => Card, {
    nullable: false,
    description: undefined
  })
  async upsertCard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCardArgs): Promise<Card> {
    return ctx.prisma.card.upsert(args);
  }
}
