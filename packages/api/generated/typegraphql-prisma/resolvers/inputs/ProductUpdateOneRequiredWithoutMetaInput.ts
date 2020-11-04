import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ProductCreateWithoutMetaInput } from "../inputs/ProductCreateWithoutMetaInput";
import { ProductUpdateWithoutMetaDataInput } from "../inputs/ProductUpdateWithoutMetaDataInput";
import { ProductUpsertWithoutMetaInput } from "../inputs/ProductUpsertWithoutMetaInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductUpdateOneRequiredWithoutMetaInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutMetaInput, {
    nullable: true,
    description: undefined
  })
  create?: ProductCreateWithoutMetaInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: ProductWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutMetaDataInput, {
    nullable: true,
    description: undefined
  })
  update?: ProductUpdateWithoutMetaDataInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpsertWithoutMetaInput, {
    nullable: true,
    description: undefined
  })
  upsert?: ProductUpsertWithoutMetaInput | undefined;
}
