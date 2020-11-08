import { ProductUpdateOneRequiredWithoutAuthorInput } from "../inputs/ProductUpdateOneRequiredWithoutAuthorInput";
import { SocialUpdateManyWithoutAuthorInput } from "../inputs/SocialUpdateManyWithoutAuthorInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class AuthorUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    avatar?: StringFieldUpdateOperationsInput | undefined;
    bio?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    website?: StringFieldUpdateOperationsInput | undefined;
    socials?: SocialUpdateManyWithoutAuthorInput | undefined;
    product?: ProductUpdateOneRequiredWithoutAuthorInput | undefined;
}
