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
exports.Meta = void 0;
const TypeGraphQL = require("type-graphql");
let Meta = class Meta {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined,
    }),
    __metadata("design:type", String)
], Meta.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined,
    }),
    __metadata("design:type", String)
], Meta.prototype, "publisher", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined,
    }),
    __metadata("design:type", String)
], Meta.prototype, "isbn", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined,
    }),
    __metadata("design:type", String)
], Meta.prototype, "edition", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined,
    }),
    __metadata("design:type", String)
], Meta.prototype, "country", void 0);
__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true,
        description: undefined,
    }),
    __metadata("design:type", Array)
], Meta.prototype, "languages", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined,
    }),
    __metadata("design:type", String)
], Meta.prototype, "numberOfReader", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined,
    }),
    __metadata("design:type", String)
], Meta.prototype, "numberOfPage", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined,
    }),
    __metadata("design:type", String)
], Meta.prototype, "samplePDF", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined,
    }),
    __metadata("design:type", String)
], Meta.prototype, "productId", void 0);
Meta = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true,
        description: undefined,
        simpleResolvers: undefined,
    })
], Meta);
exports.Meta = Meta;
