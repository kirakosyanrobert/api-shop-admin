import { ProductCreateOneWithoutCategoriesInput } from "../inputs/ProductCreateOneWithoutCategoriesInput";
export declare class CategoryCreateInput {
    id?: string | undefined;
    title: string;
    type: string;
    icon?: string | undefined;
    slug: string;
    itemCount?: number | undefined;
    product: ProductCreateOneWithoutCategoriesInput;
}
