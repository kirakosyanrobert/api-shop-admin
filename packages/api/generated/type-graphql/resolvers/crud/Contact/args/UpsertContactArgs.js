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
exports.UpsertContactArgs = void 0;
const TypeGraphQL = require("type-graphql");
const ContactCreateInput_1 = require("../../../inputs/ContactCreateInput");
const ContactUpdateInput_1 = require("../../../inputs/ContactUpdateInput");
const ContactWhereUniqueInput_1 = require("../../../inputs/ContactWhereUniqueInput");
let UpsertContactArgs = class UpsertContactArgs {
};
__decorate([
    TypeGraphQL.Field(_type => ContactWhereUniqueInput_1.ContactWhereUniqueInput, { nullable: false }),
    __metadata("design:type", ContactWhereUniqueInput_1.ContactWhereUniqueInput)
], UpsertContactArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => ContactCreateInput_1.ContactCreateInput, { nullable: false }),
    __metadata("design:type", ContactCreateInput_1.ContactCreateInput)
], UpsertContactArgs.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => ContactUpdateInput_1.ContactUpdateInput, { nullable: false }),
    __metadata("design:type", ContactUpdateInput_1.ContactUpdateInput)
], UpsertContactArgs.prototype, "update", void 0);
UpsertContactArgs = __decorate([
    TypeGraphQL.ArgsType()
], UpsertContactArgs);
exports.UpsertContactArgs = UpsertContactArgs;
