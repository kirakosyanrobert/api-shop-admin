import * as TypeGraphQL from "type-graphql";
import { FindFirstAuthorArgs } from "./args/FindFirstAuthorArgs";
import { Author } from "../../../models/Author";

@TypeGraphQL.Resolver(_of => Author)
export class FindFirstAuthorResolver {
  @TypeGraphQL.Query(_returns => Author, {
    nullable: true,
    description: undefined
  })
  async findFirstAuthor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstAuthorArgs): Promise<Author | null> {
    return ctx.prisma.author.findFirst(args);
  }
}
