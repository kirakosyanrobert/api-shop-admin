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
exports.ProductOrderByInput = void 0;
const TypeGraphQL = require("type-graphql");
const SortOrder_1 = require("../../enums/SortOrder");
let ProductOrderByInput = class ProductOrderByInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], ProductOrderByInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], ProductOrderByInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], ProductOrderByInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], ProductOrderByInput.prototype, "slug", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], ProductOrderByInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], ProductOrderByInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], ProductOrderByInput.prototype, "unit", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], ProductOrderByInput.prototype, "image", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], ProductOrderByInput.prototype, "price", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], ProductOrderByInput.prototype, "salePrice", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], ProductOrderByInput.prototype, "discountInPercent", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], ProductOrderByInput.prototype, "per_unit", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], ProductOrderByInput.prototype, "quantity", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], ProductOrderByInput.prototype, "views", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], ProductOrderByInput.prototype, "sales", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], ProductOrderByInput.prototype, "type", void 0);
ProductOrderByInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], ProductOrderByInput);
exports.ProductOrderByInput = ProductOrderByInput;
