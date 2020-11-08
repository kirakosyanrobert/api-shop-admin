"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const TypeGraphQL = require("type-graphql");
var Role;
(function (Role) {
    Role["USER"] = "USER";
    Role["ADMIN"] = "ADMIN";
})(Role = exports.Role || (exports.Role = {}));
TypeGraphQL.registerEnumType(Role, {
    name: "Role",
    description: undefined,
});
