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
exports.SocialUpsertWithWhereUniqueWithoutAuthorInput = void 0;
const TypeGraphQL = require("type-graphql");
const SocialCreateWithoutAuthorInput_1 = require("../inputs/SocialCreateWithoutAuthorInput");
const SocialUpdateWithoutAuthorDataInput_1 = require("../inputs/SocialUpdateWithoutAuthorDataInput");
const SocialWhereUniqueInput_1 = require("../inputs/SocialWhereUniqueInput");
let SocialUpsertWithWhereUniqueWithoutAuthorInput = class SocialUpsertWithWhereUniqueWithoutAuthorInput {
};
__decorate([
    TypeGraphQL.Field(_type => SocialWhereUniqueInput_1.SocialWhereUniqueInput, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", SocialWhereUniqueInput_1.SocialWhereUniqueInput)
], SocialUpsertWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => SocialUpdateWithoutAuthorDataInput_1.SocialUpdateWithoutAuthorDataInput, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", SocialUpdateWithoutAuthorDataInput_1.SocialUpdateWithoutAuthorDataInput)
], SocialUpsertWithWhereUniqueWithoutAuthorInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => SocialCreateWithoutAuthorInput_1.SocialCreateWithoutAuthorInput, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", SocialCreateWithoutAuthorInput_1.SocialCreateWithoutAuthorInput)
], SocialUpsertWithWhereUniqueWithoutAuthorInput.prototype, "create", void 0);
SocialUpsertWithWhereUniqueWithoutAuthorInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], SocialUpsertWithWhereUniqueWithoutAuthorInput);
exports.SocialUpsertWithWhereUniqueWithoutAuthorInput = SocialUpsertWithWhereUniqueWithoutAuthorInput;
