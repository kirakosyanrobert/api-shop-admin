"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CardWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardWhereInput = void 0;
const TypeGraphQL = require("type-graphql");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let CardWhereInput = CardWhereInput_1 = class CardWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [CardWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], CardWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CardWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], CardWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CardWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], CardWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], CardWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], CardWhereInput.prototype, "type", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], CardWhereInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], CardWhereInput.prototype, "cardType", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], CardWhereInput.prototype, "lastFourDigit", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], CardWhereInput.prototype, "user", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], CardWhereInput.prototype, "userId", void 0);
CardWhereInput = CardWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], CardWhereInput);
exports.CardWhereInput = CardWhereInput;
