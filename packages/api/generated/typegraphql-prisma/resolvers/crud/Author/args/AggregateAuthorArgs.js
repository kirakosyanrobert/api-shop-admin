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
exports.AggregateAuthorArgs = void 0;
const TypeGraphQL = require("type-graphql");
const AuthorOrderByInput_1 = require("../../../inputs/AuthorOrderByInput");
const AuthorWhereInput_1 = require("../../../inputs/AuthorWhereInput");
const AuthorWhereUniqueInput_1 = require("../../../inputs/AuthorWhereUniqueInput");
const AuthorDistinctFieldEnum_1 = require("../../../../enums/AuthorDistinctFieldEnum");
let AggregateAuthorArgs = class AggregateAuthorArgs {
};
__decorate([
    TypeGraphQL.Field(_type => AuthorWhereInput_1.AuthorWhereInput, { nullable: true }),
    __metadata("design:type", AuthorWhereInput_1.AuthorWhereInput)
], AggregateAuthorArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AuthorOrderByInput_1.AuthorOrderByInput], { nullable: true }),
    __metadata("design:type", Array)
], AggregateAuthorArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => AuthorWhereUniqueInput_1.AuthorWhereUniqueInput, { nullable: true }),
    __metadata("design:type", AuthorWhereUniqueInput_1.AuthorWhereUniqueInput)
], AggregateAuthorArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true }),
    __metadata("design:type", Number)
], AggregateAuthorArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true }),
    __metadata("design:type", Number)
], AggregateAuthorArgs.prototype, "skip", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AuthorDistinctFieldEnum_1.AuthorDistinctFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], AggregateAuthorArgs.prototype, "distinct", void 0);
AggregateAuthorArgs = __decorate([
    TypeGraphQL.ArgsType()
], AggregateAuthorArgs);
exports.AggregateAuthorArgs = AggregateAuthorArgs;
