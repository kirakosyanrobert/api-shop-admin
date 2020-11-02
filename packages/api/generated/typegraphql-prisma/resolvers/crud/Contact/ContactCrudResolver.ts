import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateContactArgs } from "./args/AggregateContactArgs";
import { CreateContactArgs } from "./args/CreateContactArgs";
import { DeleteContactArgs } from "./args/DeleteContactArgs";
import { DeleteManyContactArgs } from "./args/DeleteManyContactArgs";
import { FindFirstContactArgs } from "./args/FindFirstContactArgs";
import { FindManyContactArgs } from "./args/FindManyContactArgs";
import { FindOneContactArgs } from "./args/FindOneContactArgs";
import { UpdateContactArgs } from "./args/UpdateContactArgs";
import { UpdateManyContactArgs } from "./args/UpdateManyContactArgs";
import { UpsertContactArgs } from "./args/UpsertContactArgs";
import { Contact } from "../../../models/Contact";
import { AggregateContact } from "../../outputs/AggregateContact";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Contact)
export class ContactCrudResolver {
  @TypeGraphQL.Query(_returns => Contact, {
    nullable: true,
    description: undefined
  })
  async contact(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneContactArgs): Promise<Contact | null> {
    return ctx.prisma.contact.findOne(args);
  }

  @TypeGraphQL.Query(_returns => Contact, {
    nullable: true,
    description: undefined
  })
  async findFirstContact(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstContactArgs): Promise<Contact | null> {
    return ctx.prisma.contact.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Contact], {
    nullable: false,
    description: undefined
  })
  async contacts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyContactArgs): Promise<Contact[]> {
    return ctx.prisma.contact.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Contact, {
    nullable: false,
    description: undefined
  })
  async createContact(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateContactArgs): Promise<Contact> {
    return ctx.prisma.contact.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Contact, {
    nullable: true,
    description: undefined
  })
  async deleteContact(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteContactArgs): Promise<Contact | null> {
    return ctx.prisma.contact.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Contact, {
    nullable: true,
    description: undefined
  })
  async updateContact(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateContactArgs): Promise<Contact | null> {
    return ctx.prisma.contact.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyContact(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyContactArgs): Promise<BatchPayload> {
    return ctx.prisma.contact.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyContact(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyContactArgs): Promise<BatchPayload> {
    return ctx.prisma.contact.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Contact, {
    nullable: false,
    description: undefined
  })
  async upsertContact(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertContactArgs): Promise<Contact> {
    return ctx.prisma.contact.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateContact, {
    nullable: false,
    description: undefined
  })
  async aggregateContact(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateContactArgs): Promise<AggregateContact> {
    function transformFields(fields: Record<string, any>): Record<string, any> {
      return Object.fromEntries(
        Object.entries(fields)
          .filter(([key, value]) => !key.startsWith("_"))
          .map<[string, any]>(([key, value]) => {
            if (Object.keys(value).length === 0) {
              return [key, true];
            }
            return [key, transformFields(value)];
          }),
      );
    }

    return ctx.prisma.contact.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
