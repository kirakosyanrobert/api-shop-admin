import { SocialOrderByInput } from "../../../inputs/SocialOrderByInput";
import { SocialWhereInput } from "../../../inputs/SocialWhereInput";
import { SocialWhereUniqueInput } from "../../../inputs/SocialWhereUniqueInput";
export declare class FindFirstSocialArgs {
    where?: SocialWhereInput | undefined;
    orderBy?: SocialOrderByInput[] | undefined;
    cursor?: SocialWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "media" | "profileLink" | "authorId"> | undefined;
}
