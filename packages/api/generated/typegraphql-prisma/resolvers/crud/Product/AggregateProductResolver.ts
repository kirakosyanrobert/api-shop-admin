import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateProductArgs } from "./args/AggregateProductArgs";
import { Product } from "../../../models/Product";
import { AggregateProduct } from "../../outputs/AggregateProduct";

@TypeGraphQL.Resolver(_of => Product)
export class AggregateProductResolver {
  @TypeGraphQL.Query(_returns => AggregateProduct, {
    nullable: false,
    description: undefined
  })
  async aggregateProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProductArgs): Promise<AggregateProduct> {
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

    return ctx.prisma.product.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
