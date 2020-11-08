"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryDistinctFieldEnum = void 0;
const TypeGraphQL = require("type-graphql");
var GalleryDistinctFieldEnum;
(function (GalleryDistinctFieldEnum) {
    GalleryDistinctFieldEnum["id"] = "id";
    GalleryDistinctFieldEnum["url"] = "url";
    GalleryDistinctFieldEnum["productId"] = "productId";
})(GalleryDistinctFieldEnum = exports.GalleryDistinctFieldEnum || (exports.GalleryDistinctFieldEnum = {}));
TypeGraphQL.registerEnumType(GalleryDistinctFieldEnum, {
    name: "GalleryDistinctFieldEnum",
    description: undefined,
});
