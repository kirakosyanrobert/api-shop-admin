import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateGalleryArgs } from "./args/AggregateGalleryArgs";
import { Gallery } from "../../../models/Gallery";
import { AggregateGallery } from "../../outputs/AggregateGallery";

@TypeGraphQL.Resolver(_of => Gallery)
export class AggregateGalleryResolver {
  @TypeGraphQL.Query(_returns => AggregateGallery, {
    nullable: false,
    description: undefined
  })
  async aggregateGallery(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGalleryArgs): Promise<AggregateGallery> {
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

    return ctx.prisma.gallery.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
