import { GraphQLResolveInfo } from "graphql";
import { AggregateCategoryArgs } from "./args/AggregateCategoryArgs";
import { CreateCategoryArgs } from "./args/CreateCategoryArgs";
import { DeleteCategoryArgs } from "./args/DeleteCategoryArgs";
import { DeleteManyCategoryArgs } from "./args/DeleteManyCategoryArgs";
import { FindFirstCategoryArgs } from "./args/FindFirstCategoryArgs";
import { FindManyCategoryArgs } from "./args/FindManyCategoryArgs";
import { FindOneCategoryArgs } from "./args/FindOneCategoryArgs";
import { UpdateCategoryArgs } from "./args/UpdateCategoryArgs";
import { UpdateManyCategoryArgs } from "./args/UpdateManyCategoryArgs";
import { UpsertCategoryArgs } from "./args/UpsertCategoryArgs";
import { Category } from "../../../models/Category";
import { AggregateCategory } from "../../outputs/AggregateCategory";
import { BatchPayload } from "../../outputs/BatchPayload";
export declare class CategoryCrudResolver {
    category(ctx: any, args: FindOneCategoryArgs): Promise<Category | null>;
    findFirstCategory(ctx: any, args: FindFirstCategoryArgs): Promise<Category | null>;
    categories(ctx: any, args: FindManyCategoryArgs): Promise<Category[]>;
    createCategory(ctx: any, args: CreateCategoryArgs): Promise<Category>;
    deleteCategory(ctx: any, args: DeleteCategoryArgs): Promise<Category | null>;
    updateCategory(ctx: any, args: UpdateCategoryArgs): Promise<Category | null>;
    deleteManyCategory(ctx: any, args: DeleteManyCategoryArgs): Promise<BatchPayload>;
    updateManyCategory(ctx: any, args: UpdateManyCategoryArgs): Promise<BatchPayload>;
    upsertCategory(ctx: any, args: UpsertCategoryArgs): Promise<Category>;
    aggregateCategory(ctx: any, info: GraphQLResolveInfo, args: AggregateCategoryArgs): Promise<AggregateCategory>;
}
