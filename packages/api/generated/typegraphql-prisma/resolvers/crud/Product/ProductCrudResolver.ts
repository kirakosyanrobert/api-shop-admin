import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateProductArgs } from "./args/AggregateProductArgs";
import { CreateProductArgs } from "./args/CreateProductArgs";
import { DeleteManyProductArgs } from "./args/DeleteManyProductArgs";
import { DeleteProductArgs } from "./args/DeleteProductArgs";
import { FindFirstProductArgs } from "./args/FindFirstProductArgs";
import { FindManyProductArgs } from "./args/FindManyProductArgs";
import { FindOneProductArgs } from "./args/FindOneProductArgs";
import { UpdateManyProductArgs } from "./args/UpdateManyProductArgs";
import { UpdateProductArgs } from "./args/UpdateProductArgs";
import { UpsertProductArgs } from "./args/UpsertProductArgs";
import { Product } from "../../../models/Product";
import { AggregateProduct } from "../../outputs/AggregateProduct";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Product)
export class ProductCrudResolver {
  @TypeGraphQL.Query(_returns => Product, {
    nullable: true,
    description: undefined
  })
  async product(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneProductArgs): Promise<Product | null> {
    return ctx.prisma.product.findOne(args);
  }

  @TypeGraphQL.Query(_returns => Product, {
    nullable: true,
    description: undefined
  })
  async findFirstProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstProductArgs): Promise<Product | null> {
    return ctx.prisma.product.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Product], {
    nullable: false,
    description: undefined
  })
  async products(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyProductArgs): Promise<Product[]> {
    return ctx.prisma.product.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Product, {
    nullable: false,
    description: undefined
  })
  async createProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateProductArgs): Promise<Product> {
    return ctx.prisma.product.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Product, {
    nullable: true,
    description: undefined
  })
  async deleteProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteProductArgs): Promise<Product | null> {
    return ctx.prisma.product.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Product, {
    nullable: true,
    description: undefined
  })
  async updateProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateProductArgs): Promise<Product | null> {
    return ctx.prisma.product.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyProductArgs): Promise<BatchPayload> {
    return ctx.prisma.product.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyProductArgs): Promise<BatchPayload> {
    return ctx.prisma.product.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Product, {
    nullable: false,
    description: undefined
  })
  async upsertProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertProductArgs): Promise<Product> {
    return ctx.prisma.product.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateProduct, {
    nullable: false,
    description: undefined
  })
  async aggregateProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProductArgs): Promise<AggregateProduct> {
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

    return ctx.prisma.product.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
