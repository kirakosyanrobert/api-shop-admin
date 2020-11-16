import { CategoryCreateWithoutProductInput } from "../inputs/CategoryCreateWithoutProductInput";
import { CategoryScalarWhereInput } from "../inputs/CategoryScalarWhereInput";
import { CategoryUpdateManyWithWhereNestedInput } from "../inputs/CategoryUpdateManyWithWhereNestedInput";
import { CategoryUpdateWithWhereUniqueWithoutProductInput } from "../inputs/CategoryUpdateWithWhereUniqueWithoutProductInput";
import { CategoryUpsertWithWhereUniqueWithoutProductInput } from "../inputs/CategoryUpsertWithWhereUniqueWithoutProductInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";
export declare class CategoryUpdateManyWithoutProductInput {
    create?: CategoryCreateWithoutProductInput[] | undefined;
    connect?: CategoryWhereUniqueInput[] | undefined;
    set?: CategoryWhereUniqueInput[] | undefined;
    disconnect?: CategoryWhereUniqueInput[] | undefined;
    delete?: CategoryWhereUniqueInput[] | undefined;
    update?: CategoryUpdateWithWhereUniqueWithoutProductInput[] | undefined;
    updateMany?: CategoryUpdateManyWithWhereNestedInput[] | undefined;
    deleteMany?: CategoryScalarWhereInput[] | undefined;
    upsert?: CategoryUpsertWithWhereUniqueWithoutProductInput[] | undefined;
}
