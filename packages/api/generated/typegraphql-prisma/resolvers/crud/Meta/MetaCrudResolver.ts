import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateMetaArgs } from "./args/AggregateMetaArgs";
import { CreateMetaArgs } from "./args/CreateMetaArgs";
import { DeleteManyMetaArgs } from "./args/DeleteManyMetaArgs";
import { DeleteMetaArgs } from "./args/DeleteMetaArgs";
import { FindFirstMetaArgs } from "./args/FindFirstMetaArgs";
import { FindManyMetaArgs } from "./args/FindManyMetaArgs";
import { FindOneMetaArgs } from "./args/FindOneMetaArgs";
import { UpdateManyMetaArgs } from "./args/UpdateManyMetaArgs";
import { UpdateMetaArgs } from "./args/UpdateMetaArgs";
import { UpsertMetaArgs } from "./args/UpsertMetaArgs";
import { Meta } from "../../../models/Meta";
import { AggregateMeta } from "../../outputs/AggregateMeta";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Meta)
export class MetaCrudResolver {
  @TypeGraphQL.Query(_returns => Meta, {
    nullable: true,
    description: undefined
  })
  async meta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneMetaArgs): Promise<Meta | null> {
    return ctx.prisma.meta.findOne(args);
  }

  @TypeGraphQL.Query(_returns => Meta, {
    nullable: true,
    description: undefined
  })
  async findFirstMeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstMetaArgs): Promise<Meta | null> {
    return ctx.prisma.meta.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Meta], {
    nullable: false,
    description: undefined
  })
  async metas(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyMetaArgs): Promise<Meta[]> {
    return ctx.prisma.meta.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Meta, {
    nullable: false,
    description: undefined
  })
  async createMeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateMetaArgs): Promise<Meta> {
    return ctx.prisma.meta.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Meta, {
    nullable: true,
    description: undefined
  })
  async deleteMeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteMetaArgs): Promise<Meta | null> {
    return ctx.prisma.meta.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Meta, {
    nullable: true,
    description: undefined
  })
  async updateMeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateMetaArgs): Promise<Meta | null> {
    return ctx.prisma.meta.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyMeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyMetaArgs): Promise<BatchPayload> {
    return ctx.prisma.meta.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyMeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyMetaArgs): Promise<BatchPayload> {
    return ctx.prisma.meta.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Meta, {
    nullable: false,
    description: undefined
  })
  async upsertMeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertMetaArgs): Promise<Meta> {
    return ctx.prisma.meta.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateMeta, {
    nullable: false,
    description: undefined
  })
  async aggregateMeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMetaArgs): Promise<AggregateMeta> {
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

    return ctx.prisma.meta.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
