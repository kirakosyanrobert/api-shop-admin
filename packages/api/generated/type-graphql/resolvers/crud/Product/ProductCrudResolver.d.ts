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
export declare class ProductCrudResolver {
    product(ctx: any, args: FindOneProductArgs): Promise<Product | null>;
    findFirstProduct(ctx: any, args: FindFirstProductArgs): Promise<Product | null>;
    products(ctx: any, args: FindManyProductArgs): Promise<Product[]>;
    createProduct(ctx: any, args: CreateProductArgs): Promise<Product>;
    deleteProduct(ctx: any, args: DeleteProductArgs): Promise<Product | null>;
    updateProduct(ctx: any, args: UpdateProductArgs): Promise<Product | null>;
    deleteManyProduct(ctx: any, args: DeleteManyProductArgs): Promise<BatchPayload>;
    updateManyProduct(ctx: any, args: UpdateManyProductArgs): Promise<BatchPayload>;
    upsertProduct(ctx: any, args: UpsertProductArgs): Promise<Product>;
    aggregateProduct(ctx: any, info: GraphQLResolveInfo, args: AggregateProductArgs): Promise<AggregateProduct>;
}
