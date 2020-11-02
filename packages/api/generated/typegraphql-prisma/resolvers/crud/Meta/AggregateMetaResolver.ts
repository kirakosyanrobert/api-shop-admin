import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateMetaArgs } from "./args/AggregateMetaArgs";
import { Meta } from "../../../models/Meta";
import { AggregateMeta } from "../../outputs/AggregateMeta";

@TypeGraphQL.Resolver(_of => Meta)
export class AggregateMetaResolver {
  @TypeGraphQL.Query(_returns => AggregateMeta, {
    nullable: false,
    description: undefined
  })
  async aggregateMeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMetaArgs): Promise<AggregateMeta> {
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

    return ctx.prisma.meta.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
