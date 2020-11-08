"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDistinctFieldEnum = void 0;
const TypeGraphQL = require("type-graphql");
var UserDistinctFieldEnum;
(function (UserDistinctFieldEnum) {
    UserDistinctFieldEnum["id"] = "id";
    UserDistinctFieldEnum["createdAt"] = "createdAt";
    UserDistinctFieldEnum["updatedAt"] = "updatedAt";
    UserDistinctFieldEnum["email"] = "email";
    UserDistinctFieldEnum["name"] = "name";
    UserDistinctFieldEnum["role"] = "role";
    UserDistinctFieldEnum["image"] = "image";
    UserDistinctFieldEnum["password"] = "password";
})(UserDistinctFieldEnum = exports.UserDistinctFieldEnum || (exports.UserDistinctFieldEnum = {}));
TypeGraphQL.registerEnumType(UserDistinctFieldEnum, {
    name: "UserDistinctFieldEnum",
    description: undefined,
});
