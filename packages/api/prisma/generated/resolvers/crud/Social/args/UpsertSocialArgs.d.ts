import { SocialCreateInput } from "../../../inputs/SocialCreateInput";
import { SocialUpdateInput } from "../../../inputs/SocialUpdateInput";
import { SocialWhereUniqueInput } from "../../../inputs/SocialWhereUniqueInput";
export declare class UpsertSocialArgs {
    where: SocialWhereUniqueInput;
    create: SocialCreateInput;
    update: SocialUpdateInput;
}
