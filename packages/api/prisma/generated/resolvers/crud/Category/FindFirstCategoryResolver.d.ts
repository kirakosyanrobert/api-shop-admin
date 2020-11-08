import { FindFirstCategoryArgs } from "./args/FindFirstCategoryArgs";
import { Category } from "../../../models/Category";
export declare class FindFirstCategoryResolver {
    findFirstCategory(ctx: any, args: FindFirstCategoryArgs): Promise<Category | null>;
}
