import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ProductCreateWithoutAuthorInput } from "../inputs/ProductCreateWithoutAuthorInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductCreateOneWithoutAuthorInput {
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
}
