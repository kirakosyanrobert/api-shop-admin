import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ProductWhereUniqueInput } from "../../../inputs/ProductWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteProductArgs {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, { nullable: false })
  where!: ProductWhereUniqueInput;
}
