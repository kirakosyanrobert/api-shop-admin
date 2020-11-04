import * as TypeGraphQL from "type-graphql";
import { FindManyContactArgs } from "./args/FindManyContactArgs";
import { Contact } from "../../../models/Contact";

@TypeGraphQL.Resolver(_of => Contact)
export class FindManyContactResolver {
  @TypeGraphQL.Query(_returns => [Contact], {
    nullable: false,
    description: undefined
  })
  async contacts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyContactArgs): Promise<Contact[]> {
    return ctx.prisma.contact.findMany(args);
  }
}
