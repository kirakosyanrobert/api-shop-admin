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
exports.UpsertCategoryArgs = void 0;
const TypeGraphQL = require("type-graphql");
const CategoryCreateInput_1 = require("../../../inputs/CategoryCreateInput");
const CategoryUpdateInput_1 = require("../../../inputs/CategoryUpdateInput");
const CategoryWhereUniqueInput_1 = require("../../../inputs/CategoryWhereUniqueInput");
let UpsertCategoryArgs = class UpsertCategoryArgs {
};
__decorate([
    TypeGraphQL.Field(_type => CategoryWhereUniqueInput_1.CategoryWhereUniqueInput, { nullable: false }),
    __metadata("design:type", CategoryWhereUniqueInput_1.CategoryWhereUniqueInput)
], UpsertCategoryArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => CategoryCreateInput_1.CategoryCreateInput, { nullable: false }),
    __metadata("design:type", CategoryCreateInput_1.CategoryCreateInput)
], UpsertCategoryArgs.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateInput_1.CategoryUpdateInput, { nullable: false }),
    __metadata("design:type", CategoryUpdateInput_1.CategoryUpdateInput)
], UpsertCategoryArgs.prototype, "update", void 0);
UpsertCategoryArgs = __decorate([
    TypeGraphQL.ArgsType()
], UpsertCategoryArgs);
exports.UpsertCategoryArgs = UpsertCategoryArgs;
