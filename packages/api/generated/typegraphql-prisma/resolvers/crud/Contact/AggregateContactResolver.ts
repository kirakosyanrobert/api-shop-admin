import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateContactArgs } from "./args/AggregateContactArgs";
import { Contact } from "../../../models/Contact";
import { AggregateContact } from "../../outputs/AggregateContact";

@TypeGraphQL.Resolver(_of => Contact)
export class AggregateContactResolver {
  @TypeGraphQL.Query(_returns => AggregateContact, {
    nullable: false,
    description: undefined
  })
  async aggregateContact(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateContactArgs): Promise<AggregateContact> {
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

    return ctx.prisma.contact.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
