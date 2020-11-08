import { AuthorUpdateOneRequiredWithoutSocialsInput } from "../inputs/AuthorUpdateOneRequiredWithoutSocialsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class SocialUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    media?: StringFieldUpdateOperationsInput | undefined;
    profileLink?: StringFieldUpdateOperationsInput | undefined;
    author?: AuthorUpdateOneRequiredWithoutSocialsInput | undefined;
}
