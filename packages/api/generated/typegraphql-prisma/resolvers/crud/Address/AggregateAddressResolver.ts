import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAddressArgs } from "./args/AggregateAddressArgs";
import { Address } from "../../../models/Address";
import { AggregateAddress } from "../../outputs/AggregateAddress";

@TypeGraphQL.Resolver(_of => Address)
export class AggregateAddressResolver {
  @TypeGraphQL.Query(_returns => AggregateAddress, {
    nullable: false,
    description: undefined
  })
  async aggregateAddress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAddressArgs): Promise<AggregateAddress> {
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

    return ctx.prisma.address.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
