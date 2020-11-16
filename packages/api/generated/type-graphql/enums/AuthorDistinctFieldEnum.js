"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorDistinctFieldEnum = void 0;
const TypeGraphQL = require("type-graphql");
var AuthorDistinctFieldEnum;
(function (AuthorDistinctFieldEnum) {
    AuthorDistinctFieldEnum["id"] = "id";
    AuthorDistinctFieldEnum["name"] = "name";
    AuthorDistinctFieldEnum["avatar"] = "avatar";
    AuthorDistinctFieldEnum["bio"] = "bio";
    AuthorDistinctFieldEnum["email"] = "email";
    AuthorDistinctFieldEnum["website"] = "website";
    AuthorDistinctFieldEnum["productId"] = "productId";
})(AuthorDistinctFieldEnum = exports.AuthorDistinctFieldEnum || (exports.AuthorDistinctFieldEnum = {}));
TypeGraphQL.registerEnumType(AuthorDistinctFieldEnum, {
    name: "AuthorDistinctFieldEnum",
    description: undefined,
});
