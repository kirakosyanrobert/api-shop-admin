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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumRoleFilter = void 0;
const TypeGraphQL = require("type-graphql");
const NestedEnumRoleFilter_1 = require("../inputs/NestedEnumRoleFilter");
const Role_1 = require("../../enums/Role");
let EnumRoleFilter = class EnumRoleFilter {
};
__decorate([
    TypeGraphQL.Field(_type => Role_1.Role, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], EnumRoleFilter.prototype, "equals", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Role_1.Role], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], EnumRoleFilter.prototype, "in", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Role_1.Role], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], EnumRoleFilter.prototype, "notIn", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedEnumRoleFilter_1.NestedEnumRoleFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", NestedEnumRoleFilter_1.NestedEnumRoleFilter)
], EnumRoleFilter.prototype, "not", void 0);
EnumRoleFilter = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], EnumRoleFilter);
exports.EnumRoleFilter = EnumRoleFilter;
