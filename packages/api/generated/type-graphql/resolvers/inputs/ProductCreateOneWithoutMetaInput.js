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
exports.ProductCreateOneWithoutMetaInput = void 0;
const TypeGraphQL = require("type-graphql");
const ProductCreateWithoutMetaInput_1 = require("../inputs/ProductCreateWithoutMetaInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateOneWithoutMetaInput = class ProductCreateOneWithoutMetaInput {
};
__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutMetaInput_1.ProductCreateWithoutMetaInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", ProductCreateWithoutMetaInput_1.ProductCreateWithoutMetaInput)
], ProductCreateOneWithoutMetaInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductCreateOneWithoutMetaInput.prototype, "connect", void 0);
ProductCreateOneWithoutMetaInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], ProductCreateOneWithoutMetaInput);
exports.ProductCreateOneWithoutMetaInput = ProductCreateOneWithoutMetaInput;
