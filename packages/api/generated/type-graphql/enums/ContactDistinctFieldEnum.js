"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactDistinctFieldEnum = void 0;
const TypeGraphQL = require("type-graphql");
var ContactDistinctFieldEnum;
(function (ContactDistinctFieldEnum) {
    ContactDistinctFieldEnum["id"] = "id";
    ContactDistinctFieldEnum["type"] = "type";
    ContactDistinctFieldEnum["number"] = "number";
    ContactDistinctFieldEnum["userId"] = "userId";
})(ContactDistinctFieldEnum = exports.ContactDistinctFieldEnum || (exports.ContactDistinctFieldEnum = {}));
TypeGraphQL.registerEnumType(ContactDistinctFieldEnum, {
    name: "ContactDistinctFieldEnum",
    description: undefined,
});
