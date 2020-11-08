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
exports.UpsertProductArgs = void 0;
const TypeGraphQL = require("type-graphql");
const ProductCreateInput_1 = require("../../../inputs/ProductCreateInput");
const ProductUpdateInput_1 = require("../../../inputs/ProductUpdateInput");
const ProductWhereUniqueInput_1 = require("../../../inputs/ProductWhereUniqueInput");
let UpsertProductArgs = class UpsertProductArgs {
};
__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, { nullable: false }),
    __metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], UpsertProductArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductCreateInput_1.ProductCreateInput, { nullable: false }),
    __metadata("design:type", ProductCreateInput_1.ProductCreateInput)
], UpsertProductArgs.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductUpdateInput_1.ProductUpdateInput, { nullable: false }),
    __metadata("design:type", ProductUpdateInput_1.ProductUpdateInput)
], UpsertProductArgs.prototype, "update", void 0);
UpsertProductArgs = __decorate([
    TypeGraphQL.ArgsType()
], UpsertProductArgs);
exports.UpsertProductArgs = UpsertProductArgs;
