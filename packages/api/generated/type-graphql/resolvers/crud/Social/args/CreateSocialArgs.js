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
exports.CreateSocialArgs = void 0;
const TypeGraphQL = require("type-graphql");
const SocialCreateInput_1 = require("../../../inputs/SocialCreateInput");
let CreateSocialArgs = class CreateSocialArgs {
};
__decorate([
    TypeGraphQL.Field(_type => SocialCreateInput_1.SocialCreateInput, { nullable: false }),
    __metadata("design:type", SocialCreateInput_1.SocialCreateInput)
], CreateSocialArgs.prototype, "data", void 0);
CreateSocialArgs = __decorate([
    TypeGraphQL.ArgsType()
], CreateSocialArgs);
exports.CreateSocialArgs = CreateSocialArgs;
