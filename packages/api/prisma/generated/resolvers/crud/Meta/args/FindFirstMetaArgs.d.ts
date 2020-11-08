import { MetaOrderByInput } from "../../../inputs/MetaOrderByInput";
import { MetaWhereInput } from "../../../inputs/MetaWhereInput";
import { MetaWhereUniqueInput } from "../../../inputs/MetaWhereUniqueInput";
export declare class FindFirstMetaArgs {
    where?: MetaWhereInput | undefined;
    orderBy?: MetaOrderByInput[] | undefined;
    cursor?: MetaWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "publisher" | "isbn" | "edition" | "country" | "languages" | "numberOfReader" | "numberOfPage" | "samplePDF" | "productId"> | undefined;
}
