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
var NestedDateTimeFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedDateTimeFilter = void 0;
const TypeGraphQL = require("type-graphql");
let NestedDateTimeFilter = NestedDateTimeFilter_1 = class NestedDateTimeFilter {
};
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Date)
], NestedDateTimeFilter.prototype, "equals", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Date], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], NestedDateTimeFilter.prototype, "in", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Date], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], NestedDateTimeFilter.prototype, "notIn", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Date)
], NestedDateTimeFilter.prototype, "lt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Date)
], NestedDateTimeFilter.prototype, "lte", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Date)
], NestedDateTimeFilter.prototype, "gt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Date)
], NestedDateTimeFilter.prototype, "gte", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedDateTimeFilter_1, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", NestedDateTimeFilter)
], NestedDateTimeFilter.prototype, "not", void 0);
NestedDateTimeFilter = NestedDateTimeFilter_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], NestedDateTimeFilter);
exports.NestedDateTimeFilter = NestedDateTimeFilter;
