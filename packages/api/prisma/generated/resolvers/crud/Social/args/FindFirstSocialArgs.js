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
exports.FindFirstSocialArgs = void 0;
const TypeGraphQL = require("type-graphql");
const SocialOrderByInput_1 = require("../../../inputs/SocialOrderByInput");
const SocialWhereInput_1 = require("../../../inputs/SocialWhereInput");
const SocialWhereUniqueInput_1 = require("../../../inputs/SocialWhereUniqueInput");
const SocialDistinctFieldEnum_1 = require("../../../../enums/SocialDistinctFieldEnum");
let FindFirstSocialArgs = class FindFirstSocialArgs {
};
__decorate([
    TypeGraphQL.Field(_type => SocialWhereInput_1.SocialWhereInput, { nullable: true }),
    __metadata("design:type", SocialWhereInput_1.SocialWhereInput)
], FindFirstSocialArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SocialOrderByInput_1.SocialOrderByInput], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstSocialArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => SocialWhereUniqueInput_1.SocialWhereUniqueInput, { nullable: true }),
    __metadata("design:type", SocialWhereUniqueInput_1.SocialWhereUniqueInput)
], FindFirstSocialArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstSocialArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstSocialArgs.prototype, "skip", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SocialDistinctFieldEnum_1.SocialDistinctFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstSocialArgs.prototype, "distinct", void 0);
FindFirstSocialArgs = __decorate([
    TypeGraphQL.ArgsType()
], FindFirstSocialArgs);
exports.FindFirstSocialArgs = FindFirstSocialArgs;
