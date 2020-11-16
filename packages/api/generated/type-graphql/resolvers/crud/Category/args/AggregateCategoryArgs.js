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
exports.AggregateCategoryArgs = void 0;
const TypeGraphQL = require("type-graphql");
const CategoryOrderByInput_1 = require("../../../inputs/CategoryOrderByInput");
const CategoryWhereInput_1 = require("../../../inputs/CategoryWhereInput");
const CategoryWhereUniqueInput_1 = require("../../../inputs/CategoryWhereUniqueInput");
const CategoryDistinctFieldEnum_1 = require("../../../../enums/CategoryDistinctFieldEnum");
let AggregateCategoryArgs = class AggregateCategoryArgs {
};
__decorate([
    TypeGraphQL.Field(_type => CategoryWhereInput_1.CategoryWhereInput, { nullable: true }),
    __metadata("design:type", CategoryWhereInput_1.CategoryWhereInput)
], AggregateCategoryArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CategoryOrderByInput_1.CategoryOrderByInput], { nullable: true }),
    __metadata("design:type", Array)
], AggregateCategoryArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => CategoryWhereUniqueInput_1.CategoryWhereUniqueInput, { nullable: true }),
    __metadata("design:type", CategoryWhereUniqueInput_1.CategoryWhereUniqueInput)
], AggregateCategoryArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true }),
    __metadata("design:type", Number)
], AggregateCategoryArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true }),
    __metadata("design:type", Number)
], AggregateCategoryArgs.prototype, "skip", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CategoryDistinctFieldEnum_1.CategoryDistinctFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], AggregateCategoryArgs.prototype, "distinct", void 0);
AggregateCategoryArgs = __decorate([
    TypeGraphQL.ArgsType()
], AggregateCategoryArgs);
exports.AggregateCategoryArgs = AggregateCategoryArgs;
