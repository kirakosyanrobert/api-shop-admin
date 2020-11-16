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
var AuthorWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorWhereInput = void 0;
const TypeGraphQL = require("type-graphql");
const ProductRelationFilter_1 = require("../inputs/ProductRelationFilter");
const SocialListRelationFilter_1 = require("../inputs/SocialListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let AuthorWhereInput = AuthorWhereInput_1 = class AuthorWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [AuthorWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], AuthorWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AuthorWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], AuthorWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AuthorWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], AuthorWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], AuthorWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], AuthorWhereInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], AuthorWhereInput.prototype, "avatar", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], AuthorWhereInput.prototype, "bio", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], AuthorWhereInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], AuthorWhereInput.prototype, "website", void 0);
__decorate([
    TypeGraphQL.Field(_type => SocialListRelationFilter_1.SocialListRelationFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", SocialListRelationFilter_1.SocialListRelationFilter)
], AuthorWhereInput.prototype, "socials", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductRelationFilter_1.ProductRelationFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", ProductRelationFilter_1.ProductRelationFilter)
], AuthorWhereInput.prototype, "product", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], AuthorWhereInput.prototype, "productId", void 0);
AuthorWhereInput = AuthorWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], AuthorWhereInput);
exports.AuthorWhereInput = AuthorWhereInput;
