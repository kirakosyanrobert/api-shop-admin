import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSocialArgs } from "./args/AggregateSocialArgs";
import { CreateSocialArgs } from "./args/CreateSocialArgs";
import { DeleteManySocialArgs } from "./args/DeleteManySocialArgs";
import { DeleteSocialArgs } from "./args/DeleteSocialArgs";
import { FindFirstSocialArgs } from "./args/FindFirstSocialArgs";
import { FindManySocialArgs } from "./args/FindManySocialArgs";
import { FindOneSocialArgs } from "./args/FindOneSocialArgs";
import { UpdateManySocialArgs } from "./args/UpdateManySocialArgs";
import { UpdateSocialArgs } from "./args/UpdateSocialArgs";
import { UpsertSocialArgs } from "./args/UpsertSocialArgs";
import { Social } from "../../../models/Social";
import { AggregateSocial } from "../../outputs/AggregateSocial";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Social)
export class SocialCrudResolver {
  @TypeGraphQL.Query(_returns => Social, {
    nullable: true,
    description: undefined
  })
  async social(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneSocialArgs): Promise<Social | null> {
    return ctx.prisma.social.findOne(args);
  }

  @TypeGraphQL.Query(_returns => Social, {
    nullable: true,
    description: undefined
  })
  async findFirstSocial(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstSocialArgs): Promise<Social | null> {
    return ctx.prisma.social.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Social], {
    nullable: false,
    description: undefined
  })
  async socials(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManySocialArgs): Promise<Social[]> {
    return ctx.prisma.social.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Social, {
    nullable: false,
    description: undefined
  })
  async createSocial(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateSocialArgs): Promise<Social> {
    return ctx.prisma.social.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Social, {
    nullable: true,
    description: undefined
  })
  async deleteSocial(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteSocialArgs): Promise<Social | null> {
    return ctx.prisma.social.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Social, {
    nullable: true,
    description: undefined
  })
  async updateSocial(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateSocialArgs): Promise<Social | null> {
    return ctx.prisma.social.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManySocial(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManySocialArgs): Promise<BatchPayload> {
    return ctx.prisma.social.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManySocial(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManySocialArgs): Promise<BatchPayload> {
    return ctx.prisma.social.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Social, {
    nullable: false,
    description: undefined
  })
  async upsertSocial(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertSocialArgs): Promise<Social> {
    return ctx.prisma.social.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateSocial, {
    nullable: false,
    description: undefined
  })
  async aggregateSocial(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSocialArgs): Promise<AggregateSocial> {
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

    return ctx.prisma.social.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
