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
var ContactWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactWhereInput = void 0;
const TypeGraphQL = require("type-graphql");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let ContactWhereInput = ContactWhereInput_1 = class ContactWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [ContactWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], ContactWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ContactWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], ContactWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ContactWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], ContactWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], ContactWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], ContactWhereInput.prototype, "type", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], ContactWhereInput.prototype, "number", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], ContactWhereInput.prototype, "user", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], ContactWhereInput.prototype, "userId", void 0);
ContactWhereInput = ContactWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], ContactWhereInput);
exports.ContactWhereInput = ContactWhereInput;
