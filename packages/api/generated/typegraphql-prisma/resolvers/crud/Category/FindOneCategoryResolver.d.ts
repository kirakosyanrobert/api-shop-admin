import { FindOneCategoryArgs } from "./args/FindOneCategoryArgs";
import { Category } from "../../../models/Category";
export declare class FindOneCategoryResolver {
    category(ctx: any, args: FindOneCategoryArgs): Promise<Category | null>;
}
