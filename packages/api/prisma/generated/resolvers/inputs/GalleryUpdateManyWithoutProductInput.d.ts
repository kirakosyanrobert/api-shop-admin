import { GalleryCreateWithoutProductInput } from "../inputs/GalleryCreateWithoutProductInput";
import { GalleryScalarWhereInput } from "../inputs/GalleryScalarWhereInput";
import { GalleryUpdateManyWithWhereNestedInput } from "../inputs/GalleryUpdateManyWithWhereNestedInput";
import { GalleryUpdateWithWhereUniqueWithoutProductInput } from "../inputs/GalleryUpdateWithWhereUniqueWithoutProductInput";
import { GalleryUpsertWithWhereUniqueWithoutProductInput } from "../inputs/GalleryUpsertWithWhereUniqueWithoutProductInput";
import { GalleryWhereUniqueInput } from "../inputs/GalleryWhereUniqueInput";
export declare class GalleryUpdateManyWithoutProductInput {
    create?: GalleryCreateWithoutProductInput[] | undefined;
    connect?: GalleryWhereUniqueInput[] | undefined;
    set?: GalleryWhereUniqueInput[] | undefined;
    disconnect?: GalleryWhereUniqueInput[] | undefined;
    delete?: GalleryWhereUniqueInput[] | undefined;
    update?: GalleryUpdateWithWhereUniqueWithoutProductInput[] | undefined;
    updateMany?: GalleryUpdateManyWithWhereNestedInput[] | undefined;
    deleteMany?: GalleryScalarWhereInput[] | undefined;
    upsert?: GalleryUpsertWithWhereUniqueWithoutProductInput[] | undefined;
}
