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
exports.ProductUpdateWithoutAuthorDataInput = void 0;
const TypeGraphQL = require("type-graphql");
const CategoryUpdateManyWithoutProductInput_1 = require("../inputs/CategoryUpdateManyWithoutProductInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumProductTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumProductTypeFieldUpdateOperationsInput");
const GalleryUpdateManyWithoutProductInput_1 = require("../inputs/GalleryUpdateManyWithoutProductInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const MetaUpdateOneWithoutProductInput_1 = require("../inputs/MetaUpdateOneWithoutProductInput");
const NullableIntFieldUpdateOperationsInput_1 = require("../inputs/NullableIntFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ProductUpdateWithoutAuthorDataInput = class ProductUpdateWithoutAuthorDataInput {
};
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateWithoutAuthorDataInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProductUpdateWithoutAuthorDataInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProductUpdateWithoutAuthorDataInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateWithoutAuthorDataInput.prototype, "slug", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateWithoutAuthorDataInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateWithoutAuthorDataInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateWithoutAuthorDataInput.prototype, "unit", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateWithoutAuthorDataInput.prototype, "image", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], ProductUpdateWithoutAuthorDataInput.prototype, "price", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], ProductUpdateWithoutAuthorDataInput.prototype, "salePrice", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], ProductUpdateWithoutAuthorDataInput.prototype, "discountInPercent", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], ProductUpdateWithoutAuthorDataInput.prototype, "per_unit", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], ProductUpdateWithoutAuthorDataInput.prototype, "quantity", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], ProductUpdateWithoutAuthorDataInput.prototype, "views", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], ProductUpdateWithoutAuthorDataInput.prototype, "sales", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumProductTypeFieldUpdateOperationsInput_1.EnumProductTypeFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", EnumProductTypeFieldUpdateOperationsInput_1.EnumProductTypeFieldUpdateOperationsInput)
], ProductUpdateWithoutAuthorDataInput.prototype, "type", void 0);
__decorate([
    TypeGraphQL.Field(_type => MetaUpdateOneWithoutProductInput_1.MetaUpdateOneWithoutProductInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", MetaUpdateOneWithoutProductInput_1.MetaUpdateOneWithoutProductInput)
], ProductUpdateWithoutAuthorDataInput.prototype, "meta", void 0);
__decorate([
    TypeGraphQL.Field(_type => GalleryUpdateManyWithoutProductInput_1.GalleryUpdateManyWithoutProductInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", GalleryUpdateManyWithoutProductInput_1.GalleryUpdateManyWithoutProductInput)
], ProductUpdateWithoutAuthorDataInput.prototype, "gallery", void 0);
__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateManyWithoutProductInput_1.CategoryUpdateManyWithoutProductInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", CategoryUpdateManyWithoutProductInput_1.CategoryUpdateManyWithoutProductInput)
], ProductUpdateWithoutAuthorDataInput.prototype, "categories", void 0);
ProductUpdateWithoutAuthorDataInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], ProductUpdateWithoutAuthorDataInput);
exports.ProductUpdateWithoutAuthorDataInput = ProductUpdateWithoutAuthorDataInput;
