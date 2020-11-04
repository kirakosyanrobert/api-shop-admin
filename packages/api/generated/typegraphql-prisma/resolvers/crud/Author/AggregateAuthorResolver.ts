import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAuthorArgs } from "./args/AggregateAuthorArgs";
import { Author } from "../../../models/Author";
import { AggregateAuthor } from "../../outputs/AggregateAuthor";

@TypeGraphQL.Resolver(_of => Author)
export class AggregateAuthorResolver {
  @TypeGraphQL.Query(_returns => AggregateAuthor, {
    nullable: false,
    description: undefined
  })
  async aggregateAuthor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAuthorArgs): Promise<AggregateAuthor> {
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

    return ctx.prisma.author.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
