import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAuthorArgs } from "./args/AggregateAuthorArgs";
import { CreateAuthorArgs } from "./args/CreateAuthorArgs";
import { DeleteAuthorArgs } from "./args/DeleteAuthorArgs";
import { DeleteManyAuthorArgs } from "./args/DeleteManyAuthorArgs";
import { FindFirstAuthorArgs } from "./args/FindFirstAuthorArgs";
import { FindManyAuthorArgs } from "./args/FindManyAuthorArgs";
import { FindOneAuthorArgs } from "./args/FindOneAuthorArgs";
import { UpdateAuthorArgs } from "./args/UpdateAuthorArgs";
import { UpdateManyAuthorArgs } from "./args/UpdateManyAuthorArgs";
import { UpsertAuthorArgs } from "./args/UpsertAuthorArgs";
import { Author } from "../../../models/Author";
import { AggregateAuthor } from "../../outputs/AggregateAuthor";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Author)
export class AuthorCrudResolver {
  @TypeGraphQL.Query(_returns => Author, {
    nullable: true,
    description: undefined
  })
  async author(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneAuthorArgs): Promise<Author | null> {
    return ctx.prisma.author.findOne(args);
  }

  @TypeGraphQL.Query(_returns => Author, {
    nullable: true,
    description: undefined
  })
  async findFirstAuthor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstAuthorArgs): Promise<Author | null> {
    return ctx.prisma.author.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Author], {
    nullable: false,
    description: undefined
  })
  async authors(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyAuthorArgs): Promise<Author[]> {
    return ctx.prisma.author.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Author, {
    nullable: false,
    description: undefined
  })
  async createAuthor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateAuthorArgs): Promise<Author> {
    return ctx.prisma.author.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Author, {
    nullable: true,
    description: undefined
  })
  async deleteAuthor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteAuthorArgs): Promise<Author | null> {
    return ctx.prisma.author.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Author, {
    nullable: true,
    description: undefined
  })
  async updateAuthor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateAuthorArgs): Promise<Author | null> {
    return ctx.prisma.author.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyAuthor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyAuthorArgs): Promise<BatchPayload> {
    return ctx.prisma.author.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyAuthor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyAuthorArgs): Promise<BatchPayload> {
    return ctx.prisma.author.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Author, {
    nullable: false,
    description: undefined
  })
  async upsertAuthor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertAuthorArgs): Promise<Author> {
    return ctx.prisma.author.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateAuthor, {
    nullable: false,
    description: undefined
  })
  async aggregateAuthor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAuthorArgs): Promise<AggregateAuthor> {
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

    return ctx.prisma.author.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
