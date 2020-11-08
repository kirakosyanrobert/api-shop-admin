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
exports.MetaUpdateOneWithoutProductInput = void 0;
const TypeGraphQL = require("type-graphql");
const MetaCreateWithoutProductInput_1 = require("../inputs/MetaCreateWithoutProductInput");
const MetaUpdateWithoutProductDataInput_1 = require("../inputs/MetaUpdateWithoutProductDataInput");
const MetaUpsertWithoutProductInput_1 = require("../inputs/MetaUpsertWithoutProductInput");
const MetaWhereUniqueInput_1 = require("../inputs/MetaWhereUniqueInput");
let MetaUpdateOneWithoutProductInput = class MetaUpdateOneWithoutProductInput {
};
__decorate([
    TypeGraphQL.Field(_type => MetaCreateWithoutProductInput_1.MetaCreateWithoutProductInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", MetaCreateWithoutProductInput_1.MetaCreateWithoutProductInput)
], MetaUpdateOneWithoutProductInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => MetaWhereUniqueInput_1.MetaWhereUniqueInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", MetaWhereUniqueInput_1.MetaWhereUniqueInput)
], MetaUpdateOneWithoutProductInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Boolean)
], MetaUpdateOneWithoutProductInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Boolean)
], MetaUpdateOneWithoutProductInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => MetaUpdateWithoutProductDataInput_1.MetaUpdateWithoutProductDataInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", MetaUpdateWithoutProductDataInput_1.MetaUpdateWithoutProductDataInput)
], MetaUpdateOneWithoutProductInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => MetaUpsertWithoutProductInput_1.MetaUpsertWithoutProductInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", MetaUpsertWithoutProductInput_1.MetaUpsertWithoutProductInput)
], MetaUpdateOneWithoutProductInput.prototype, "upsert", void 0);
MetaUpdateOneWithoutProductInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], MetaUpdateOneWithoutProductInput);
exports.MetaUpdateOneWithoutProductInput = MetaUpdateOneWithoutProductInput;
