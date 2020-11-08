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
exports.MetaOrderByInput = void 0;
const TypeGraphQL = require("type-graphql");
const SortOrder_1 = require("../../enums/SortOrder");
let MetaOrderByInput = class MetaOrderByInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], MetaOrderByInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], MetaOrderByInput.prototype, "publisher", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], MetaOrderByInput.prototype, "isbn", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], MetaOrderByInput.prototype, "edition", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], MetaOrderByInput.prototype, "country", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], MetaOrderByInput.prototype, "languages", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], MetaOrderByInput.prototype, "numberOfReader", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], MetaOrderByInput.prototype, "numberOfPage", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], MetaOrderByInput.prototype, "samplePDF", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], MetaOrderByInput.prototype, "productId", void 0);
MetaOrderByInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], MetaOrderByInput);
exports.MetaOrderByInput = MetaOrderByInput;
