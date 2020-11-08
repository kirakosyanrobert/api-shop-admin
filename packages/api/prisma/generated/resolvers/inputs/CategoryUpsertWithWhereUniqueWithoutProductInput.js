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
exports.CategoryUpsertWithWhereUniqueWithoutProductInput = void 0;
const TypeGraphQL = require("type-graphql");
const CategoryCreateWithoutProductInput_1 = require("../inputs/CategoryCreateWithoutProductInput");
const CategoryUpdateWithoutProductDataInput_1 = require("../inputs/CategoryUpdateWithoutProductDataInput");
const CategoryWhereUniqueInput_1 = require("../inputs/CategoryWhereUniqueInput");
let CategoryUpsertWithWhereUniqueWithoutProductInput = class CategoryUpsertWithWhereUniqueWithoutProductInput {
};
__decorate([
    TypeGraphQL.Field(_type => CategoryWhereUniqueInput_1.CategoryWhereUniqueInput, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", CategoryWhereUniqueInput_1.CategoryWhereUniqueInput)
], CategoryUpsertWithWhereUniqueWithoutProductInput.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateWithoutProductDataInput_1.CategoryUpdateWithoutProductDataInput, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", CategoryUpdateWithoutProductDataInput_1.CategoryUpdateWithoutProductDataInput)
], CategoryUpsertWithWhereUniqueWithoutProductInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => CategoryCreateWithoutProductInput_1.CategoryCreateWithoutProductInput, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", CategoryCreateWithoutProductInput_1.CategoryCreateWithoutProductInput)
], CategoryUpsertWithWhereUniqueWithoutProductInput.prototype, "create", void 0);
CategoryUpsertWithWhereUniqueWithoutProductInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], CategoryUpsertWithWhereUniqueWithoutProductInput);
exports.CategoryUpsertWithWhereUniqueWithoutProductInput = CategoryUpsertWithWhereUniqueWithoutProductInput;
