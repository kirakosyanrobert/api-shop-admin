import * as TypeGraphQL from "type-graphql";
import { UpdateAuthorArgs } from "./args/UpdateAuthorArgs";
import { Author } from "../../../models/Author";

@TypeGraphQL.Resolver(_of => Author)
export class UpdateAuthorResolver {
  @TypeGraphQL.Mutation(_returns => Author, {
    nullable: true,
    description: undefined
  })
  async updateAuthor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateAuthorArgs): Promise<Author | null> {
    return ctx.prisma.author.update(args);
  }
}
