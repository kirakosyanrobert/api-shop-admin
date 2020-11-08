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
var UserWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWhereInput = void 0;
const TypeGraphQL = require("type-graphql");
const AddressListRelationFilter_1 = require("../inputs/AddressListRelationFilter");
const CardListRelationFilter_1 = require("../inputs/CardListRelationFilter");
const ContactListRelationFilter_1 = require("../inputs/ContactListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumRoleFilter_1 = require("../inputs/EnumRoleFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let UserWhereInput = UserWhereInput_1 = class UserWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], UserWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], UserWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], UserWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], UserWhereInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], UserWhereInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumRoleFilter_1.EnumRoleFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", EnumRoleFilter_1.EnumRoleFilter)
], UserWhereInput.prototype, "role", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "image", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "password", void 0);
__decorate([
    TypeGraphQL.Field(_type => AddressListRelationFilter_1.AddressListRelationFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", AddressListRelationFilter_1.AddressListRelationFilter)
], UserWhereInput.prototype, "addresses", void 0);
__decorate([
    TypeGraphQL.Field(_type => ContactListRelationFilter_1.ContactListRelationFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", ContactListRelationFilter_1.ContactListRelationFilter)
], UserWhereInput.prototype, "contacts", void 0);
__decorate([
    TypeGraphQL.Field(_type => CardListRelationFilter_1.CardListRelationFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", CardListRelationFilter_1.CardListRelationFilter)
], UserWhereInput.prototype, "card", void 0);
UserWhereInput = UserWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], UserWhereInput);
exports.UserWhereInput = UserWhereInput;
