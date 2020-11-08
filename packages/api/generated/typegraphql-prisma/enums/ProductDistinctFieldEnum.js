"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDistinctFieldEnum = void 0;
const TypeGraphQL = require("type-graphql");
var ProductDistinctFieldEnum;
(function (ProductDistinctFieldEnum) {
    ProductDistinctFieldEnum["id"] = "id";
    ProductDistinctFieldEnum["createdAt"] = "createdAt";
    ProductDistinctFieldEnum["updatedAt"] = "updatedAt";
    ProductDistinctFieldEnum["slug"] = "slug";
    ProductDistinctFieldEnum["title"] = "title";
    ProductDistinctFieldEnum["description"] = "description";
    ProductDistinctFieldEnum["unit"] = "unit";
    ProductDistinctFieldEnum["image"] = "image";
    ProductDistinctFieldEnum["price"] = "price";
    ProductDistinctFieldEnum["salePrice"] = "salePrice";
    ProductDistinctFieldEnum["discountInPercent"] = "discountInPercent";
    ProductDistinctFieldEnum["per_unit"] = "per_unit";
    ProductDistinctFieldEnum["quantity"] = "quantity";
    ProductDistinctFieldEnum["views"] = "views";
    ProductDistinctFieldEnum["sales"] = "sales";
    ProductDistinctFieldEnum["type"] = "type";
})(ProductDistinctFieldEnum = exports.ProductDistinctFieldEnum || (exports.ProductDistinctFieldEnum = {}));
TypeGraphQL.registerEnumType(ProductDistinctFieldEnum, {
    name: "ProductDistinctFieldEnum",
    description: undefined,
});
