"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductType = void 0;
const TypeGraphQL = require("type-graphql");
var ProductType;
(function (ProductType) {
    ProductType["BOOK"] = "BOOK";
    ProductType["BAGS"] = "BAGS";
    ProductType["GROCERY"] = "GROCERY";
    ProductType["MEDICINE"] = "MEDICINE";
    ProductType["CLOTH"] = "CLOTH";
    ProductType["CLOTHING"] = "CLOTHING";
    ProductType["FURNITURE"] = "FURNITURE";
    ProductType["FURNITURE_TWO"] = "FURNITURE_TWO";
    ProductType["MAKEUP"] = "MAKEUP";
    ProductType["BAKERY"] = "BAKERY";
})(ProductType = exports.ProductType || (exports.ProductType = {}));
TypeGraphQL.registerEnumType(ProductType, {
    name: "ProductType",
    description: undefined,
});
