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
exports.SocialListRelationFilter = void 0;
const TypeGraphQL = require("type-graphql");
const SocialWhereInput_1 = require("../inputs/SocialWhereInput");
let SocialListRelationFilter = class SocialListRelationFilter {
};
__decorate([
    TypeGraphQL.Field(_type => SocialWhereInput_1.SocialWhereInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", SocialWhereInput_1.SocialWhereInput)
], SocialListRelationFilter.prototype, "every", void 0);
__decorate([
    TypeGraphQL.Field(_type => SocialWhereInput_1.SocialWhereInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", SocialWhereInput_1.SocialWhereInput)
], SocialListRelationFilter.prototype, "some", void 0);
__decorate([
    TypeGraphQL.Field(_type => SocialWhereInput_1.SocialWhereInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", SocialWhereInput_1.SocialWhereInput)
], SocialListRelationFilter.prototype, "none", void 0);
SocialListRelationFilter = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], SocialListRelationFilter);
exports.SocialListRelationFilter = SocialListRelationFilter;
