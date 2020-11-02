import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCardArgs } from "./args/AggregateCardArgs";
import { Card } from "../../../models/Card";
import { AggregateCard } from "../../outputs/AggregateCard";

@TypeGraphQL.Resolver(_of => Card)
export class AggregateCardResolver {
  @TypeGraphQL.Query(_returns => AggregateCard, {
    nullable: false,
    description: undefined
  })
  async aggregateCard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCardArgs): Promise<AggregateCard> {
    function transformFields(fields: Record<string, any>): Record<string, any> {
      return Object.fromEntries(
        Object.entries(fields)
          .filter(([key, value]) => !key.startsWith("_"))
          .map<[string, any]>(([key, value]) => {
            if (Object.keys(value).length === 0) {
              return [key, true];
            }
            return [key, transformFields(value)];
          }),
      );
    }

    return ctx.prisma.card.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
