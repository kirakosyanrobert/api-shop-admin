import * as TypeGraphQL from "type-graphql";
import { DeleteAuthorArgs } from "./args/DeleteAuthorArgs";
import { Author } from "../../../models/Author";

@TypeGraphQL.Resolver(_of => Author)
export class DeleteAuthorResolver {
  @TypeGraphQL.Mutation(_returns => Author, {
    nullable: true,
    description: undefined
  })
  async deleteAuthor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteAuthorArgs): Promise<Author | null> {
    return ctx.prisma.author.delete(args);
  }
}
