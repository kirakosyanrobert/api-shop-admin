import * as TypeGraphQL from "type-graphql";
import { FindOneAuthorArgs } from "./args/FindOneAuthorArgs";
import { Author } from "../../../models/Author";

@TypeGraphQL.Resolver(_of => Author)
export class FindOneAuthorResolver {
  @TypeGraphQL.Query(_returns => Author, {
    nullable: true,
    description: undefined
  })
  async author(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneAuthorArgs): Promise<Author | null> {
    return ctx.prisma.author.findOne(args);
  }
}
