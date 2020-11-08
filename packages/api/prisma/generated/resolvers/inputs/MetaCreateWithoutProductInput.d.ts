import { MetaCreatelanguagesInput } from "../inputs/MetaCreatelanguagesInput";
export declare class MetaCreateWithoutProductInput {
    id?: string | undefined;
    publisher: string;
    isbn: string;
    edition: string;
    country: string;
    numberOfReader: string;
    numberOfPage: string;
    samplePDF: string;
    languages?: MetaCreatelanguagesInput | undefined;
}
