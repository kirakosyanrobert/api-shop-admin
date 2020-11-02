import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAddressArgs } from "./args/AggregateAddressArgs";
import { CreateAddressArgs } from "./args/CreateAddressArgs";
import { DeleteAddressArgs } from "./args/DeleteAddressArgs";
import { DeleteManyAddressArgs } from "./args/DeleteManyAddressArgs";
import { FindFirstAddressArgs } from "./args/FindFirstAddressArgs";
import { FindManyAddressArgs } from "./args/FindManyAddressArgs";
import { FindOneAddressArgs } from "./args/FindOneAddressArgs";
import { UpdateAddressArgs } from "./args/UpdateAddressArgs";
import { UpdateManyAddressArgs } from "./args/UpdateManyAddressArgs";
import { UpsertAddressArgs } from "./args/UpsertAddressArgs";
import { Address } from "../../../models/Address";
import { AggregateAddress } from "../../outputs/AggregateAddress";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Address)
export class AddressCrudResolver {
  @TypeGraphQL.Query(_returns => Address, {
    nullable: true,
    description: undefined
  })
  async address(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneAddressArgs): Promise<Address | null> {
    return ctx.prisma.address.findOne(args);
  }

  @TypeGraphQL.Query(_returns => Address, {
    nullable: true,
    description: undefined
  })
  async findFirstAddress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstAddressArgs): Promise<Address | null> {
    return ctx.prisma.address.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Address], {
    nullable: false,
    description: undefined
  })
  async addresses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyAddressArgs): Promise<Address[]> {
    return ctx.prisma.address.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Address, {
    nullable: false,
    description: undefined
  })
  async createAddress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateAddressArgs): Promise<Address> {
    return ctx.prisma.address.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Address, {
    nullable: true,
    description: undefined
  })
  async deleteAddress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteAddressArgs): Promise<Address | null> {
    return ctx.prisma.address.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Address, {
    nullable: true,
    description: undefined
  })
  async updateAddress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateAddressArgs): Promise<Address | null> {
    return ctx.prisma.address.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyAddress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyAddressArgs): Promise<BatchPayload> {
    return ctx.prisma.address.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyAddress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyAddressArgs): Promise<BatchPayload> {
    return ctx.prisma.address.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Address, {
    nullable: false,
    description: undefined
  })
  async upsertAddress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertAddressArgs): Promise<Address> {
    return ctx.prisma.address.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateAddress, {
    nullable: false,
    description: undefined
  })
  async aggregateAddress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAddressArgs): Promise<AggregateAddress> {
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

    return ctx.prisma.address.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
