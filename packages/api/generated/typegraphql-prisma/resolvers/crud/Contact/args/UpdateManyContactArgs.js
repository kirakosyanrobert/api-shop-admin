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
exports.UpdateManyContactArgs = void 0;
const TypeGraphQL = require("type-graphql");
const ContactUpdateManyMutationInput_1 = require("../../../inputs/ContactUpdateManyMutationInput");
const ContactWhereInput_1 = require("../../../inputs/ContactWhereInput");
let UpdateManyContactArgs = class UpdateManyContactArgs {
};
__decorate([
    TypeGraphQL.Field(_type => ContactUpdateManyMutationInput_1.ContactUpdateManyMutationInput, { nullable: false }),
    __metadata("design:type", ContactUpdateManyMutationInput_1.ContactUpdateManyMutationInput)
], UpdateManyContactArgs.prototype, "data", void 0);
__decorate([
    TypeGraphQL.Field(_type => ContactWhereInput_1.ContactWhereInput, { nullable: true }),
    __metadata("design:type", ContactWhereInput_1.ContactWhereInput)
], UpdateManyContactArgs.prototype, "where", void 0);
UpdateManyContactArgs = __decorate([
    TypeGraphQL.ArgsType()
], UpdateManyContactArgs);
exports.UpdateManyContactArgs = UpdateManyContactArgs;
