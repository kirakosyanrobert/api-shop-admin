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
var AddressWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressWhereInput = void 0;
const TypeGraphQL = require("type-graphql");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let AddressWhereInput = AddressWhereInput_1 = class AddressWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [AddressWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], AddressWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AddressWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], AddressWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AddressWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], AddressWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], AddressWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], AddressWhereInput.prototype, "type", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], AddressWhereInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], AddressWhereInput.prototype, "location", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], AddressWhereInput.prototype, "user", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], AddressWhereInput.prototype, "userId", void 0);
AddressWhereInput = AddressWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], AddressWhereInput);
exports.AddressWhereInput = AddressWhereInput;
