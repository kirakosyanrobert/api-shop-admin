import * as TypeGraphQL from "type-graphql";
import { DeleteManyAuthorArgs } from "./args/DeleteManyAuthorArgs";
import { Author } from "../../../models/Author";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Author)
export class DeleteManyAuthorResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyAuthor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyAuthorArgs): Promise<BatchPayload> {
    return ctx.prisma.author.deleteMany(args);
  }
}
