import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ProductCreateWithoutAuthorInput } from "../inputs/ProductCreateWithoutAuthorInput";
import { ProductUpdateWithoutAuthorDataInput } from "../inputs/ProductUpdateWithoutAuthorDataInput";
import { ProductUpsertWithoutAuthorInput } from "../inputs/ProductUpsertWithoutAuthorInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductUpdateOneRequiredWithoutAuthorInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutAuthorInput, {
    nullable: true,
    description: undefined
  })
  create?: ProductCreateWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: ProductWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutAuthorDataInput, {
    nullable: true,
    description: undefined
  })
  update?: ProductUpdateWithoutAuthorDataInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpsertWithoutAuthorInput, {
    nullable: true,
    description: undefined
  })
  upsert?: ProductUpsertWithoutAuthorInput | undefined;
}
