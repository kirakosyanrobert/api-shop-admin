import { CreateCategoryArgs } from "./args/CreateCategoryArgs";
import { Category } from "../../../models/Category";
export declare class CreateCategoryResolver {
    createCategory(ctx: any, args: CreateCategoryArgs): Promise<Category>;
}
