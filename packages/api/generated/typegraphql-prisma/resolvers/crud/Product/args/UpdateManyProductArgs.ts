import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ProductUpdateManyMutationInput } from "../../../inputs/ProductUpdateManyMutationInput";
import { ProductWhereInput } from "../../../inputs/ProductWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProductArgs {
  @TypeGraphQL.Field(_type => ProductUpdateManyMutationInput, { nullable: false })
  data!: ProductUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ProductWhereInput, { nullable: true })
  where?: ProductWhereInput | undefined;
}
