import * as TypeGraphQL from "type-graphql";

export enum MetaDistinctFieldEnum {
  id = "id",
  publisher = "publisher",
  isbn = "isbn",
  edition = "edition",
  country = "country",
  languages = "languages",
  numberOfReader = "numberOfReader",
  numberOfPage = "numberOfPage",
  samplePDF = "samplePDF",
  productId = "productId"
}
TypeGraphQL.registerEnumType(MetaDistinctFieldEnum, {
  name: "MetaDistinctFieldEnum",
  description: undefined,
});
