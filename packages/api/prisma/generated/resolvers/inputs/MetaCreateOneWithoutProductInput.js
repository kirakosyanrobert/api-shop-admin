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
exports.MetaCreateOneWithoutProductInput = void 0;
const TypeGraphQL = require("type-graphql");
const MetaCreateWithoutProductInput_1 = require("../inputs/MetaCreateWithoutProductInput");
const MetaWhereUniqueInput_1 = require("../inputs/MetaWhereUniqueInput");
let MetaCreateOneWithoutProductInput = class MetaCreateOneWithoutProductInput {
};
__decorate([
    TypeGraphQL.Field(_type => MetaCreateWithoutProductInput_1.MetaCreateWithoutProductInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", MetaCreateWithoutProductInput_1.MetaCreateWithoutProductInput)
], MetaCreateOneWithoutProductInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => MetaWhereUniqueInput_1.MetaWhereUniqueInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", MetaWhereUniqueInput_1.MetaWhereUniqueInput)
], MetaCreateOneWithoutProductInput.prototype, "connect", void 0);
MetaCreateOneWithoutProductInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], MetaCreateOneWithoutProductInput);
exports.MetaCreateOneWithoutProductInput = MetaCreateOneWithoutProductInput;
