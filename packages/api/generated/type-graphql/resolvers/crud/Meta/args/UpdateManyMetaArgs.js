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
exports.UpdateManyMetaArgs = void 0;
const TypeGraphQL = require("type-graphql");
const MetaUpdateManyMutationInput_1 = require("../../../inputs/MetaUpdateManyMutationInput");
const MetaWhereInput_1 = require("../../../inputs/MetaWhereInput");
let UpdateManyMetaArgs = class UpdateManyMetaArgs {
};
__decorate([
    TypeGraphQL.Field(_type => MetaUpdateManyMutationInput_1.MetaUpdateManyMutationInput, { nullable: false }),
    __metadata("design:type", MetaUpdateManyMutationInput_1.MetaUpdateManyMutationInput)
], UpdateManyMetaArgs.prototype, "data", void 0);
__decorate([
    TypeGraphQL.Field(_type => MetaWhereInput_1.MetaWhereInput, { nullable: true }),
    __metadata("design:type", MetaWhereInput_1.MetaWhereInput)
], UpdateManyMetaArgs.prototype, "where", void 0);
UpdateManyMetaArgs = __decorate([
    TypeGraphQL.ArgsType()
], UpdateManyMetaArgs);
exports.UpdateManyMetaArgs = UpdateManyMetaArgs;
