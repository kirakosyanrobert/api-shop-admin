import { ProductCreateWithoutMetaInput } from "../inputs/ProductCreateWithoutMetaInput";
import { ProductUpdateWithoutMetaDataInput } from "../inputs/ProductUpdateWithoutMetaDataInput";
import { ProductUpsertWithoutMetaInput } from "../inputs/ProductUpsertWithoutMetaInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductUpdateOneRequiredWithoutMetaInput {
    create?: ProductCreateWithoutMetaInput | undefined;
    connect?: ProductWhereUniqueInput | undefined;
    update?: ProductUpdateWithoutMetaDataInput | undefined;
    upsert?: ProductUpsertWithoutMetaInput | undefined;
}
