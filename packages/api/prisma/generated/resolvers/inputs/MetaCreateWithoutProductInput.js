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
exports.MetaCreateWithoutProductInput = void 0;
const TypeGraphQL = require("type-graphql");
const MetaCreatelanguagesInput_1 = require("../inputs/MetaCreatelanguagesInput");
let MetaCreateWithoutProductInput = class MetaCreateWithoutProductInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], MetaCreateWithoutProductInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], MetaCreateWithoutProductInput.prototype, "publisher", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], MetaCreateWithoutProductInput.prototype, "isbn", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], MetaCreateWithoutProductInput.prototype, "edition", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], MetaCreateWithoutProductInput.prototype, "country", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], MetaCreateWithoutProductInput.prototype, "numberOfReader", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], MetaCreateWithoutProductInput.prototype, "numberOfPage", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], MetaCreateWithoutProductInput.prototype, "samplePDF", void 0);
__decorate([
    TypeGraphQL.Field(_type => MetaCreatelanguagesInput_1.MetaCreatelanguagesInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", MetaCreatelanguagesInput_1.MetaCreatelanguagesInput)
], MetaCreateWithoutProductInput.prototype, "languages", void 0);
MetaCreateWithoutProductInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], MetaCreateWithoutProductInput);
exports.MetaCreateWithoutProductInput = MetaCreateWithoutProductInput;
