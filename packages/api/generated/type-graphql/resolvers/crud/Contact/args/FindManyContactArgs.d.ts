import { ContactOrderByInput } from "../../../inputs/ContactOrderByInput";
import { ContactWhereInput } from "../../../inputs/ContactWhereInput";
import { ContactWhereUniqueInput } from "../../../inputs/ContactWhereUniqueInput";
export declare class FindManyContactArgs {
    where?: ContactWhereInput | undefined;
    orderBy?: ContactOrderByInput[] | undefined;
    cursor?: ContactWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "type" | "number" | "userId"> | undefined;
}
