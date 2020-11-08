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
exports.SocialUpdateManyWithoutAuthorInput = void 0;
const TypeGraphQL = require("type-graphql");
const SocialCreateWithoutAuthorInput_1 = require("../inputs/SocialCreateWithoutAuthorInput");
const SocialScalarWhereInput_1 = require("../inputs/SocialScalarWhereInput");
const SocialUpdateManyWithWhereNestedInput_1 = require("../inputs/SocialUpdateManyWithWhereNestedInput");
const SocialUpdateWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/SocialUpdateWithWhereUniqueWithoutAuthorInput");
const SocialUpsertWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/SocialUpsertWithWhereUniqueWithoutAuthorInput");
const SocialWhereUniqueInput_1 = require("../inputs/SocialWhereUniqueInput");
let SocialUpdateManyWithoutAuthorInput = class SocialUpdateManyWithoutAuthorInput {
};
__decorate([
    TypeGraphQL.Field(_type => [SocialCreateWithoutAuthorInput_1.SocialCreateWithoutAuthorInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], SocialUpdateManyWithoutAuthorInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SocialWhereUniqueInput_1.SocialWhereUniqueInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], SocialUpdateManyWithoutAuthorInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SocialWhereUniqueInput_1.SocialWhereUniqueInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], SocialUpdateManyWithoutAuthorInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SocialWhereUniqueInput_1.SocialWhereUniqueInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], SocialUpdateManyWithoutAuthorInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SocialWhereUniqueInput_1.SocialWhereUniqueInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], SocialUpdateManyWithoutAuthorInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SocialUpdateWithWhereUniqueWithoutAuthorInput_1.SocialUpdateWithWhereUniqueWithoutAuthorInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], SocialUpdateManyWithoutAuthorInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SocialUpdateManyWithWhereNestedInput_1.SocialUpdateManyWithWhereNestedInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], SocialUpdateManyWithoutAuthorInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SocialScalarWhereInput_1.SocialScalarWhereInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], SocialUpdateManyWithoutAuthorInput.prototype, "deleteMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SocialUpsertWithWhereUniqueWithoutAuthorInput_1.SocialUpsertWithWhereUniqueWithoutAuthorInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], SocialUpdateManyWithoutAuthorInput.prototype, "upsert", void 0);
SocialUpdateManyWithoutAuthorInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], SocialUpdateManyWithoutAuthorInput);
exports.SocialUpdateManyWithoutAuthorInput = SocialUpdateManyWithoutAuthorInput;
