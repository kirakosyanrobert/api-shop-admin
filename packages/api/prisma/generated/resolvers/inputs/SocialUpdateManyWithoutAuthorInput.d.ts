import { SocialCreateWithoutAuthorInput } from "../inputs/SocialCreateWithoutAuthorInput";
import { SocialScalarWhereInput } from "../inputs/SocialScalarWhereInput";
import { SocialUpdateManyWithWhereNestedInput } from "../inputs/SocialUpdateManyWithWhereNestedInput";
import { SocialUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/SocialUpdateWithWhereUniqueWithoutAuthorInput";
import { SocialUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/SocialUpsertWithWhereUniqueWithoutAuthorInput";
import { SocialWhereUniqueInput } from "../inputs/SocialWhereUniqueInput";
export declare class SocialUpdateManyWithoutAuthorInput {
    create?: SocialCreateWithoutAuthorInput[] | undefined;
    connect?: SocialWhereUniqueInput[] | undefined;
    set?: SocialWhereUniqueInput[] | undefined;
    disconnect?: SocialWhereUniqueInput[] | undefined;
    delete?: SocialWhereUniqueInput[] | undefined;
    update?: SocialUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;
    updateMany?: SocialUpdateManyWithWhereNestedInput[] | undefined;
    deleteMany?: SocialScalarWhereInput[] | undefined;
    upsert?: SocialUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;
}
