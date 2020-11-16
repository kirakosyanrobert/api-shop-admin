import { DeleteSocialArgs } from "./args/DeleteSocialArgs";
import { Social } from "../../../models/Social";
export declare class DeleteSocialResolver {
    deleteSocial(ctx: any, args: DeleteSocialArgs): Promise<Social | null>;
}
