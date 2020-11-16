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
exports.UpsertCardArgs = void 0;
const TypeGraphQL = require("type-graphql");
const CardCreateInput_1 = require("../../../inputs/CardCreateInput");
const CardUpdateInput_1 = require("../../../inputs/CardUpdateInput");
const CardWhereUniqueInput_1 = require("../../../inputs/CardWhereUniqueInput");
let UpsertCardArgs = class UpsertCardArgs {
};
__decorate([
    TypeGraphQL.Field(_type => CardWhereUniqueInput_1.CardWhereUniqueInput, { nullable: false }),
    __metadata("design:type", CardWhereUniqueInput_1.CardWhereUniqueInput)
], UpsertCardArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => CardCreateInput_1.CardCreateInput, { nullable: false }),
    __metadata("design:type", CardCreateInput_1.CardCreateInput)
], UpsertCardArgs.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => CardUpdateInput_1.CardUpdateInput, { nullable: false }),
    __metadata("design:type", CardUpdateInput_1.CardUpdateInput)
], UpsertCardArgs.prototype, "update", void 0);
UpsertCardArgs = __decorate([
    TypeGraphQL.ArgsType()
], UpsertCardArgs);
exports.UpsertCardArgs = UpsertCardArgs;
