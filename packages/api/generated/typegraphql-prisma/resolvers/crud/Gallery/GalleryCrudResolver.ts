import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateGalleryArgs } from "./args/AggregateGalleryArgs";
import { CreateGalleryArgs } from "./args/CreateGalleryArgs";
import { DeleteGalleryArgs } from "./args/DeleteGalleryArgs";
import { DeleteManyGalleryArgs } from "./args/DeleteManyGalleryArgs";
import { FindFirstGalleryArgs } from "./args/FindFirstGalleryArgs";
import { FindManyGalleryArgs } from "./args/FindManyGalleryArgs";
import { FindOneGalleryArgs } from "./args/FindOneGalleryArgs";
import { UpdateGalleryArgs } from "./args/UpdateGalleryArgs";
import { UpdateManyGalleryArgs } from "./args/UpdateManyGalleryArgs";
import { UpsertGalleryArgs } from "./args/UpsertGalleryArgs";
import { Gallery } from "../../../models/Gallery";
import { AggregateGallery } from "../../outputs/AggregateGallery";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Gallery)
export class GalleryCrudResolver {
  @TypeGraphQL.Query(_returns => Gallery, {
    nullable: true,
    description: undefined
  })
  async gallery(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneGalleryArgs): Promise<Gallery | null> {
    return ctx.prisma.gallery.findOne(args);
  }

  @TypeGraphQL.Query(_returns => Gallery, {
    nullable: true,
    description: undefined
  })
  async findFirstGallery(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstGalleryArgs): Promise<Gallery | null> {
    return ctx.prisma.gallery.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Gallery], {
    nullable: false,
    description: undefined
  })
  async galleries(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyGalleryArgs): Promise<Gallery[]> {
    return ctx.prisma.gallery.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Gallery, {
    nullable: false,
    description: undefined
  })
  async createGallery(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateGalleryArgs): Promise<Gallery> {
    return ctx.prisma.gallery.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Gallery, {
    nullable: true,
    description: undefined
  })
  async deleteGallery(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteGalleryArgs): Promise<Gallery | null> {
    return ctx.prisma.gallery.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Gallery, {
    nullable: true,
    description: undefined
  })
  async updateGallery(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateGalleryArgs): Promise<Gallery | null> {
    return ctx.prisma.gallery.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyGallery(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyGalleryArgs): Promise<BatchPayload> {
    return ctx.prisma.gallery.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyGallery(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyGalleryArgs): Promise<BatchPayload> {
    return ctx.prisma.gallery.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Gallery, {
    nullable: false,
    description: undefined
  })
  async upsertGallery(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertGalleryArgs): Promise<Gallery> {
    return ctx.prisma.gallery.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateGallery, {
    nullable: false,
    description: undefined
  })
  async aggregateGallery(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGalleryArgs): Promise<AggregateGallery> {
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

    return ctx.prisma.gallery.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
