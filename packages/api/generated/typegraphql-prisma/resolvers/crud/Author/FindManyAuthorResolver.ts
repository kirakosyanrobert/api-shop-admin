import * as TypeGraphQL from "type-graphql";
import { FindManyAuthorArgs } from "./args/FindManyAuthorArgs";
import { Author } from "../../../models/Author";

@TypeGraphQL.Resolver(_of => Author)
export class FindManyAuthorResolver {
  @TypeGraphQL.Query(_returns => [Author], {
    nullable: false,
    description: undefined
  })
  async authors(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyAuthorArgs): Promise<Author[]> {
    return ctx.prisma.author.findMany(args);
  }
}
