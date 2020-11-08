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
exports.ProductUpdateWithoutCategoriesDataInput = void 0;
const TypeGraphQL = require("type-graphql");
const AuthorUpdateOneWithoutProductInput_1 = require("../inputs/AuthorUpdateOneWithoutProductInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumProductTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumProductTypeFieldUpdateOperationsInput");
const GalleryUpdateManyWithoutProductInput_1 = require("../inputs/GalleryUpdateManyWithoutProductInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const MetaUpdateOneWithoutProductInput_1 = require("../inputs/MetaUpdateOneWithoutProductInput");
const NullableIntFieldUpdateOperationsInput_1 = require("../inputs/NullableIntFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ProductUpdateWithoutCategoriesDataInput = class ProductUpdateWithoutCategoriesDataInput {
};
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateWithoutCategoriesDataInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProductUpdateWithoutCategoriesDataInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProductUpdateWithoutCategoriesDataInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateWithoutCategoriesDataInput.prototype, "slug", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateWithoutCategoriesDataInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateWithoutCategoriesDataInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateWithoutCategoriesDataInput.prototype, "unit", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateWithoutCategoriesDataInput.prototype, "image", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], ProductUpdateWithoutCategoriesDataInput.prototype, "price", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], ProductUpdateWithoutCategoriesDataInput.prototype, "salePrice", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], ProductUpdateWithoutCategoriesDataInput.prototype, "discountInPercent", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], ProductUpdateWithoutCategoriesDataInput.prototype, "per_unit", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], ProductUpdateWithoutCategoriesDataInput.prototype, "quantity", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], ProductUpdateWithoutCategoriesDataInput.prototype, "views", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], ProductUpdateWithoutCategoriesDataInput.prototype, "sales", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumProductTypeFieldUpdateOperationsInput_1.EnumProductTypeFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", EnumProductTypeFieldUpdateOperationsInput_1.EnumProductTypeFieldUpdateOperationsInput)
], ProductUpdateWithoutCategoriesDataInput.prototype, "type", void 0);
__decorate([
    TypeGraphQL.Field(_type => AuthorUpdateOneWithoutProductInput_1.AuthorUpdateOneWithoutProductInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", AuthorUpdateOneWithoutProductInput_1.AuthorUpdateOneWithoutProductInput)
], ProductUpdateWithoutCategoriesDataInput.prototype, "author", void 0);
__decorate([
    TypeGraphQL.Field(_type => MetaUpdateOneWithoutProductInput_1.MetaUpdateOneWithoutProductInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", MetaUpdateOneWithoutProductInput_1.MetaUpdateOneWithoutProductInput)
], ProductUpdateWithoutCategoriesDataInput.prototype, "meta", void 0);
__decorate([
    TypeGraphQL.Field(_type => GalleryUpdateManyWithoutProductInput_1.GalleryUpdateManyWithoutProductInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", GalleryUpdateManyWithoutProductInput_1.GalleryUpdateManyWithoutProductInput)
], ProductUpdateWithoutCategoriesDataInput.prototype, "gallery", void 0);
ProductUpdateWithoutCategoriesDataInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], ProductUpdateWithoutCategoriesDataInput);
exports.ProductUpdateWithoutCategoriesDataInput = ProductUpdateWithoutCategoriesDataInput;
