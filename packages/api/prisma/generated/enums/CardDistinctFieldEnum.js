"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardDistinctFieldEnum = void 0;
const TypeGraphQL = require("type-graphql");
var CardDistinctFieldEnum;
(function (CardDistinctFieldEnum) {
    CardDistinctFieldEnum["id"] = "id";
    CardDistinctFieldEnum["type"] = "type";
    CardDistinctFieldEnum["title"] = "title";
    CardDistinctFieldEnum["cardType"] = "cardType";
    CardDistinctFieldEnum["lastFourDigit"] = "lastFourDigit";
    CardDistinctFieldEnum["userId"] = "userId";
})(CardDistinctFieldEnum = exports.CardDistinctFieldEnum || (exports.CardDistinctFieldEnum = {}));
TypeGraphQL.registerEnumType(CardDistinctFieldEnum, {
    name: "CardDistinctFieldEnum",
    description: undefined,
});
