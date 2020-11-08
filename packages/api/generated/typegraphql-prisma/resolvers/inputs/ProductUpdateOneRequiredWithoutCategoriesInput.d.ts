import { ProductCreateWithoutCategoriesInput } from "../inputs/ProductCreateWithoutCategoriesInput";
import { ProductUpdateWithoutCategoriesDataInput } from "../inputs/ProductUpdateWithoutCategoriesDataInput";
import { ProductUpsertWithoutCategoriesInput } from "../inputs/ProductUpsertWithoutCategoriesInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductUpdateOneRequiredWithoutCategoriesInput {
    create?: ProductCreateWithoutCategoriesInput | undefined;
    connect?: ProductWhereUniqueInput | undefined;
    update?: ProductUpdateWithoutCategoriesDataInput | undefined;
    upsert?: ProductUpsertWithoutCategoriesInput | undefined;
}
