"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialDistinctFieldEnum = void 0;
const TypeGraphQL = require("type-graphql");
var SocialDistinctFieldEnum;
(function (SocialDistinctFieldEnum) {
    SocialDistinctFieldEnum["id"] = "id";
    SocialDistinctFieldEnum["media"] = "media";
    SocialDistinctFieldEnum["profileLink"] = "profileLink";
    SocialDistinctFieldEnum["authorId"] = "authorId";
})(SocialDistinctFieldEnum = exports.SocialDistinctFieldEnum || (exports.SocialDistinctFieldEnum = {}));
TypeGraphQL.registerEnumType(SocialDistinctFieldEnum, {
    name: "SocialDistinctFieldEnum",
    description: undefined,
});
