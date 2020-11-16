import { MetaCreatelanguagesInput } from "../inputs/MetaCreatelanguagesInput";
import { ProductCreateOneWithoutMetaInput } from "../inputs/ProductCreateOneWithoutMetaInput";
export declare class MetaCreateInput {
    id?: string | undefined;
    publisher: string;
    isbn: string;
    edition: string;
    country: string;
    numberOfReader: string;
    numberOfPage: string;
    samplePDF: string;
    languages?: MetaCreatelanguagesInput | undefined;
    product: ProductCreateOneWithoutMetaInput;
}
