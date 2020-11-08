import { UpsertCategoryArgs } from "./args/UpsertCategoryArgs";
import { Category } from "../../../models/Category";
export declare class UpsertCategoryResolver {
    upsertCategory(ctx: any, args: UpsertCategoryArgs): Promise<Category>;
}
