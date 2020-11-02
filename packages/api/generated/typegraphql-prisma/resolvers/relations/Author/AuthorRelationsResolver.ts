import * as TypeGraphQL from "type-graphql";
import { Author } from "../../../models/Author";
import { Product } from "../../../models/Product";
import { Social } from "../../../models/Social";
import { AuthorSocialsArgs } from "./args/AuthorSocialsArgs";

@TypeGraphQL.Resolver(_of => Author)
export class AuthorRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Social], {
    nullable: true,
    description: undefined,
  })
  async socials(@TypeGraphQL.Root() author: Author, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AuthorSocialsArgs): Promise<Social[] | null> {
    return ctx.prisma.author.findOne({
      where: {
        id: author.id,
      },
    }).socials(args);
  }

  @TypeGraphQL.FieldResolver(_type => Product, {
    nullable: false,
    description: undefined,
  })
  async product(@TypeGraphQL.Root() author: Author, @TypeGraphQL.Ctx() ctx: any): Promise<Product> {
    return ctx.prisma.author.findOne({
      where: {
        id: author.id,
      },
    }).product({});
  }
}
