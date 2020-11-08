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
var SocialWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialWhereInput = void 0;
const TypeGraphQL = require("type-graphql");
const AuthorRelationFilter_1 = require("../inputs/AuthorRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let SocialWhereInput = SocialWhereInput_1 = class SocialWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [SocialWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], SocialWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SocialWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], SocialWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SocialWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], SocialWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], SocialWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], SocialWhereInput.prototype, "media", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], SocialWhereInput.prototype, "profileLink", void 0);
__decorate([
    TypeGraphQL.Field(_type => AuthorRelationFilter_1.AuthorRelationFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", AuthorRelationFilter_1.AuthorRelationFilter)
], SocialWhereInput.prototype, "author", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], SocialWhereInput.prototype, "authorId", void 0);
SocialWhereInput = SocialWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], SocialWhereInput);
exports.SocialWhereInput = SocialWhereInput;
