import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ProductCreateInput } from "../../../inputs/ProductCreateInput";

@TypeGraphQL.ArgsType()
export class CreateProductArgs {
  @TypeGraphQL.Field(_type => ProductCreateInput, { nullable: false })
  data!: ProductCreateInput;
}
