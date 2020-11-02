import * as TypeGraphQL from "type-graphql";
import { CreateAuthorArgs } from "./args/CreateAuthorArgs";
import { Author } from "../../../models/Author";

@TypeGraphQL.Resolver(_of => Author)
export class CreateAuthorResolver {
  @TypeGraphQL.Mutation(_returns => Author, {
    nullable: false,
    description: undefined
  })
  async createAuthor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateAuthorArgs): Promise<Author> {
    return ctx.prisma.author.create(args);
  }
}
