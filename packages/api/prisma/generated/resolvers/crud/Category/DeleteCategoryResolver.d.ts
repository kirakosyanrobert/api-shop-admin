import { DeleteCategoryArgs } from "./args/DeleteCategoryArgs";
import { Category } from "../../../models/Category";
export declare class DeleteCategoryResolver {
    deleteCategory(ctx: any, args: DeleteCategoryArgs): Promise<Category | null>;
}
