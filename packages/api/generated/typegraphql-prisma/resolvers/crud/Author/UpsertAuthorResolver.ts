import * as TypeGraphQL from "type-graphql";
import { UpsertAuthorArgs } from "./args/UpsertAuthorArgs";
import { Author } from "../../../models/Author";

@TypeGraphQL.Resolver(_of => Author)
export class UpsertAuthorResolver {
  @TypeGraphQL.Mutation(_returns => Author, {
    nullable: false,
    description: undefined
  })
  async upsertAuthor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertAuthorArgs): Promise<Author> {
    return ctx.prisma.author.upsert(args);
  }
}
