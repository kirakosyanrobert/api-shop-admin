"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressDistinctFieldEnum = void 0;
const TypeGraphQL = require("type-graphql");
var AddressDistinctFieldEnum;
(function (AddressDistinctFieldEnum) {
    AddressDistinctFieldEnum["id"] = "id";
    AddressDistinctFieldEnum["type"] = "type";
    AddressDistinctFieldEnum["title"] = "title";
    AddressDistinctFieldEnum["location"] = "location";
    AddressDistinctFieldEnum["userId"] = "userId";
})(AddressDistinctFieldEnum = exports.AddressDistinctFieldEnum || (exports.AddressDistinctFieldEnum = {}));
TypeGraphQL.registerEnumType(AddressDistinctFieldEnum, {
    name: "AddressDistinctFieldEnum",
    description: undefined,
});
