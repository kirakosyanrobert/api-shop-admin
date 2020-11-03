import * as TypeGraphQL from "type-graphql";
import { Card } from "../../../models/Card";
import { User } from "../../../models/User";

@TypeGraphQL.Resolver(_of => Card)
export class CardRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false,
    description: undefined,
  })
  async user(@TypeGraphQL.Root() card: Card, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return ctx.prisma.card.findOne({
      where: {
        id: card.id,
      },
    }).user({});
  }
}
