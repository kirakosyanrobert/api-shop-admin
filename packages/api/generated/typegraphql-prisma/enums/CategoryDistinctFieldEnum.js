"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryDistinctFieldEnum = void 0;
const TypeGraphQL = require("type-graphql");
var CategoryDistinctFieldEnum;
(function (CategoryDistinctFieldEnum) {
    CategoryDistinctFieldEnum["id"] = "id";
    CategoryDistinctFieldEnum["title"] = "title";
    CategoryDistinctFieldEnum["type"] = "type";
    CategoryDistinctFieldEnum["icon"] = "icon";
    CategoryDistinctFieldEnum["slug"] = "slug";
    CategoryDistinctFieldEnum["itemCount"] = "itemCount";
    CategoryDistinctFieldEnum["productId"] = "productId";
})(CategoryDistinctFieldEnum = exports.CategoryDistinctFieldEnum || (exports.CategoryDistinctFieldEnum = {}));
TypeGraphQL.registerEnumType(CategoryDistinctFieldEnum, {
    name: "CategoryDistinctFieldEnum",
    description: undefined,
});
