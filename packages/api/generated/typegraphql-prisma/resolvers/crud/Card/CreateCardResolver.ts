import * as TypeGraphQL from "type-graphql";
import { CreateCardArgs } from "./args/CreateCardArgs";
import { Card } from "../../../models/Card";

@TypeGraphQL.Resolver(_of => Card)
export class CreateCardResolver {
  @TypeGraphQL.Mutation(_returns => Card, {
    nullable: false,
    description: undefined
  })
  async createCard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCardArgs): Promise<Card> {
    return ctx.prisma.card.create(args);
  }
}
