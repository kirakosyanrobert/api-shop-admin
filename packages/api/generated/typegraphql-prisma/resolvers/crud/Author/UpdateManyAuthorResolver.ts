import * as TypeGraphQL from "type-graphql";
import { UpdateManyAuthorArgs } from "./args/UpdateManyAuthorArgs";
import { Author } from "../../../models/Author";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Author)
export class UpdateManyAuthorResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyAuthor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyAuthorArgs): Promise<BatchPayload> {
    return ctx.prisma.author.updateMany(args);
  }
}
