import { UpdateCategoryArgs } from "./args/UpdateCategoryArgs";
import { Category } from "../../../models/Category";
export declare class UpdateCategoryResolver {
    updateCategory(ctx: any, args: UpdateCategoryArgs): Promise<Category | null>;
}
