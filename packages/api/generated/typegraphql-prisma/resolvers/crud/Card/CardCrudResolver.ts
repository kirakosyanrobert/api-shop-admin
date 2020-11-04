import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCardArgs } from "./args/AggregateCardArgs";
import { CreateCardArgs } from "./args/CreateCardArgs";
import { DeleteCardArgs } from "./args/DeleteCardArgs";
import { DeleteManyCardArgs } from "./args/DeleteManyCardArgs";
import { FindFirstCardArgs } from "./args/FindFirstCardArgs";
import { FindManyCardArgs } from "./args/FindManyCardArgs";
import { FindOneCardArgs } from "./args/FindOneCardArgs";
import { UpdateCardArgs } from "./args/UpdateCardArgs";
import { UpdateManyCardArgs } from "./args/UpdateManyCardArgs";
import { UpsertCardArgs } from "./args/UpsertCardArgs";
import { Card } from "../../../models/Card";
import { AggregateCard } from "../../outputs/AggregateCard";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Card)
export class CardCrudResolver {
  @TypeGraphQL.Query(_returns => Card, {
    nullable: true,
    description: undefined
  })
  async card(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneCardArgs): Promise<Card | null> {
    return ctx.prisma.card.findOne(args);
  }

  @TypeGraphQL.Query(_returns => Card, {
    nullable: true,
    description: undefined
  })
  async findFirstCard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCardArgs): Promise<Card | null> {
    return ctx.prisma.card.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Card], {
    nullable: false,
    description: undefined
  })
  async cards(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCardArgs): Promise<Card[]> {
    return ctx.prisma.card.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Card, {
    nullable: false,
    description: undefined
  })
  async createCard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCardArgs): Promise<Card> {
    return ctx.prisma.card.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Card, {
    nullable: true,
    description: undefined
  })
  async deleteCard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCardArgs): Promise<Card | null> {
    return ctx.prisma.card.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Card, {
    nullable: true,
    description: undefined
  })
  async updateCard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCardArgs): Promise<Card | null> {
    return ctx.prisma.card.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyCard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCardArgs): Promise<BatchPayload> {
    return ctx.prisma.card.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyCard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCardArgs): Promise<BatchPayload> {
    return ctx.prisma.card.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Card, {
    nullable: false,
    description: undefined
  })
  async upsertCard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCardArgs): Promise<Card> {
    return ctx.prisma.card.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateCard, {
    nullable: false,
    description: undefined
  })
  async aggregateCard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCardArgs): Promise<AggregateCard> {
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

    return ctx.prisma.card.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
