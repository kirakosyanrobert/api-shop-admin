import * as TypeGraphQL from "type-graphql";
import { Author } from "../../../models/Author";
import { Social } from "../../../models/Social";

@TypeGraphQL.Resolver(_of => Social)
export class SocialRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Author, {
    nullable: false,
    description: undefined,
  })
  async author(@TypeGraphQL.Root() social: Social, @TypeGraphQL.Ctx() ctx: any): Promise<Author> {
    return ctx.prisma.social.findOne({
      where: {
        id: social.id,
      },
    }).author({});
  }
}
