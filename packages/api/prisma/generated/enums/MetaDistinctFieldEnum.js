"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaDistinctFieldEnum = void 0;
const TypeGraphQL = require("type-graphql");
var MetaDistinctFieldEnum;
(function (MetaDistinctFieldEnum) {
    MetaDistinctFieldEnum["id"] = "id";
    MetaDistinctFieldEnum["publisher"] = "publisher";
    MetaDistinctFieldEnum["isbn"] = "isbn";
    MetaDistinctFieldEnum["edition"] = "edition";
    MetaDistinctFieldEnum["country"] = "country";
    MetaDistinctFieldEnum["languages"] = "languages";
    MetaDistinctFieldEnum["numberOfReader"] = "numberOfReader";
    MetaDistinctFieldEnum["numberOfPage"] = "numberOfPage";
    MetaDistinctFieldEnum["samplePDF"] = "samplePDF";
    MetaDistinctFieldEnum["productId"] = "productId";
})(MetaDistinctFieldEnum = exports.MetaDistinctFieldEnum || (exports.MetaDistinctFieldEnum = {}));
TypeGraphQL.registerEnumType(MetaDistinctFieldEnum, {
    name: "MetaDistinctFieldEnum",
    description: undefined,
});
