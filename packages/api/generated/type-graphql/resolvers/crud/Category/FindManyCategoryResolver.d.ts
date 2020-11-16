import { FindManyCategoryArgs } from "./args/FindManyCategoryArgs";
import { Category } from "../../../models/Category";
export declare class FindManyCategoryResolver {
    categories(ctx: any, args: FindManyCategoryArgs): Promise<Category[]>;
}
