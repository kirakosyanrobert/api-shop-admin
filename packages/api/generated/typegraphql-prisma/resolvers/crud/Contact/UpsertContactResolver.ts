import * as TypeGraphQL from "type-graphql";
import { UpsertContactArgs } from "./args/UpsertContactArgs";
import { Contact } from "../../../models/Contact";

@TypeGraphQL.Resolver(_of => Contact)
export class UpsertContactResolver {
  @TypeGraphQL.Mutation(_returns => Contact, {
    nullable: false,
    description: undefined
  })
  async upsertContact(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertContactArgs): Promise<Contact> {
    return ctx.prisma.contact.upsert(args);
  }
}
