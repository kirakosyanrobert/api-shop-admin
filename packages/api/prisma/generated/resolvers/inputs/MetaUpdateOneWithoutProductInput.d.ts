import { MetaCreateWithoutProductInput } from "../inputs/MetaCreateWithoutProductInput";
import { MetaUpdateWithoutProductDataInput } from "../inputs/MetaUpdateWithoutProductDataInput";
import { MetaUpsertWithoutProductInput } from "../inputs/MetaUpsertWithoutProductInput";
import { MetaWhereUniqueInput } from "../inputs/MetaWhereUniqueInput";
export declare class MetaUpdateOneWithoutProductInput {
    create?: MetaCreateWithoutProductInput | undefined;
    connect?: MetaWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: MetaUpdateWithoutProductDataInput | undefined;
    upsert?: MetaUpsertWithoutProductInput | undefined;
}
