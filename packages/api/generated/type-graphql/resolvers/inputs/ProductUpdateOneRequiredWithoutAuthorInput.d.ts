import { ProductCreateWithoutAuthorInput } from "../inputs/ProductCreateWithoutAuthorInput";
import { ProductUpdateWithoutAuthorDataInput } from "../inputs/ProductUpdateWithoutAuthorDataInput";
import { ProductUpsertWithoutAuthorInput } from "../inputs/ProductUpsertWithoutAuthorInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductUpdateOneRequiredWithoutAuthorInput {
    create?: ProductCreateWithoutAuthorInput | undefined;
    connect?: ProductWhereUniqueInput | undefined;
    update?: ProductUpdateWithoutAuthorDataInput | undefined;
    upsert?: ProductUpsertWithoutAuthorInput | undefined;
}
