import { AddressOrderByInput } from "../../../inputs/AddressOrderByInput";
import { AddressWhereInput } from "../../../inputs/AddressWhereInput";
import { AddressWhereUniqueInput } from "../../../inputs/AddressWhereUniqueInput";
export declare class FindFirstAddressArgs {
    where?: AddressWhereInput | undefined;
    orderBy?: AddressOrderByInput[] | undefined;
    cursor?: AddressWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "type" | "title" | "location" | "userId"> | undefined;
}
