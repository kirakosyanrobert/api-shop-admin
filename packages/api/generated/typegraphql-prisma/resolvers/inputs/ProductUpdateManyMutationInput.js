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
exports.ProductUpdateManyMutationInput = void 0;
const TypeGraphQL = require("type-graphql");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumProductTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumProductTypeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const NullableIntFieldUpdateOperationsInput_1 = require("../inputs/NullableIntFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ProductUpdateManyMutationInput = class ProductUpdateManyMutationInput {
};
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateManyMutationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProductUpdateManyMutationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProductUpdateManyMutationInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateManyMutationInput.prototype, "slug", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateManyMutationInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateManyMutationInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateManyMutationInput.prototype, "unit", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateManyMutationInput.prototype, "image", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], ProductUpdateManyMutationInput.prototype, "price", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], ProductUpdateManyMutationInput.prototype, "salePrice", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], ProductUpdateManyMutationInput.prototype, "discountInPercent", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], ProductUpdateManyMutationInput.prototype, "per_unit", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], ProductUpdateManyMutationInput.prototype, "quantity", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], ProductUpdateManyMutationInput.prototype, "views", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], ProductUpdateManyMutationInput.prototype, "sales", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumProductTypeFieldUpdateOperationsInput_1.EnumProductTypeFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", EnumProductTypeFieldUpdateOperationsInput_1.EnumProductTypeFieldUpdateOperationsInput)
], ProductUpdateManyMutationInput.prototype, "type", void 0);
ProductUpdateManyMutationInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], ProductUpdateManyMutationInput);
exports.ProductUpdateManyMutationInput = ProductUpdateManyMutationInput;
