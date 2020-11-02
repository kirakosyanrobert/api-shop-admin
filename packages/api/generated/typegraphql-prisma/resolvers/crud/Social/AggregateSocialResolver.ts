import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSocialArgs } from "./args/AggregateSocialArgs";
import { Social } from "../../../models/Social";
import { AggregateSocial } from "../../outputs/AggregateSocial";

@TypeGraphQL.Resolver(_of => Social)
export class AggregateSocialResolver {
  @TypeGraphQL.Query(_returns => AggregateSocial, {
    nullable: false,
    description: undefined
  })
  async aggregateSocial(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSocialArgs): Promise<AggregateSocial> {
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

    return ctx.prisma.social.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
