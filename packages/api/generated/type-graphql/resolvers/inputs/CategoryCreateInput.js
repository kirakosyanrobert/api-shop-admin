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
exports.CategoryCreateInput = void 0;
const TypeGraphQL = require("type-graphql");
const ProductCreateOneWithoutCategoriesInput_1 = require("../inputs/ProductCreateOneWithoutCategoriesInput");
let CategoryCreateInput = class CategoryCreateInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], CategoryCreateInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], CategoryCreateInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], CategoryCreateInput.prototype, "type", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], CategoryCreateInput.prototype, "icon", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], CategoryCreateInput.prototype, "slug", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Number)
], CategoryCreateInput.prototype, "itemCount", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductCreateOneWithoutCategoriesInput_1.ProductCreateOneWithoutCategoriesInput, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", ProductCreateOneWithoutCategoriesInput_1.ProductCreateOneWithoutCategoriesInput)
], CategoryCreateInput.prototype, "product", void 0);
CategoryCreateInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], CategoryCreateInput);
exports.CategoryCreateInput = CategoryCreateInput;
