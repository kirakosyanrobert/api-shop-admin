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
var SocialScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialScalarWhereInput = void 0;
const TypeGraphQL = require("type-graphql");
const StringFilter_1 = require("../inputs/StringFilter");
let SocialScalarWhereInput = SocialScalarWhereInput_1 = class SocialScalarWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [SocialScalarWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], SocialScalarWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SocialScalarWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], SocialScalarWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SocialScalarWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], SocialScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], SocialScalarWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], SocialScalarWhereInput.prototype, "media", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], SocialScalarWhereInput.prototype, "profileLink", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], SocialScalarWhereInput.prototype, "authorId", void 0);
SocialScalarWhereInput = SocialScalarWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], SocialScalarWhereInput);
exports.SocialScalarWhereInput = SocialScalarWhereInput;
