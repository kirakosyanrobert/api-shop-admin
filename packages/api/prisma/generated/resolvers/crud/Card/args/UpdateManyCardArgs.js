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
exports.UpdateManyCardArgs = void 0;
const TypeGraphQL = require("type-graphql");
const CardUpdateManyMutationInput_1 = require("../../../inputs/CardUpdateManyMutationInput");
const CardWhereInput_1 = require("../../../inputs/CardWhereInput");
let UpdateManyCardArgs = class UpdateManyCardArgs {
};
__decorate([
    TypeGraphQL.Field(_type => CardUpdateManyMutationInput_1.CardUpdateManyMutationInput, { nullable: false }),
    __metadata("design:type", CardUpdateManyMutationInput_1.CardUpdateManyMutationInput)
], UpdateManyCardArgs.prototype, "data", void 0);
__decorate([
    TypeGraphQL.Field(_type => CardWhereInput_1.CardWhereInput, { nullable: true }),
    __metadata("design:type", CardWhereInput_1.CardWhereInput)
], UpdateManyCardArgs.prototype, "where", void 0);
UpdateManyCardArgs = __decorate([
    TypeGraphQL.ArgsType()
], UpdateManyCardArgs);
exports.UpdateManyCardArgs = UpdateManyCardArgs;
