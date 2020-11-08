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
exports.GalleryUpdateManyWithoutProductInput = void 0;
const TypeGraphQL = require("type-graphql");
const GalleryCreateWithoutProductInput_1 = require("../inputs/GalleryCreateWithoutProductInput");
const GalleryScalarWhereInput_1 = require("../inputs/GalleryScalarWhereInput");
const GalleryUpdateManyWithWhereNestedInput_1 = require("../inputs/GalleryUpdateManyWithWhereNestedInput");
const GalleryUpdateWithWhereUniqueWithoutProductInput_1 = require("../inputs/GalleryUpdateWithWhereUniqueWithoutProductInput");
const GalleryUpsertWithWhereUniqueWithoutProductInput_1 = require("../inputs/GalleryUpsertWithWhereUniqueWithoutProductInput");
const GalleryWhereUniqueInput_1 = require("../inputs/GalleryWhereUniqueInput");
let GalleryUpdateManyWithoutProductInput = class GalleryUpdateManyWithoutProductInput {
};
__decorate([
    TypeGraphQL.Field(_type => [GalleryCreateWithoutProductInput_1.GalleryCreateWithoutProductInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], GalleryUpdateManyWithoutProductInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [GalleryWhereUniqueInput_1.GalleryWhereUniqueInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], GalleryUpdateManyWithoutProductInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [GalleryWhereUniqueInput_1.GalleryWhereUniqueInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], GalleryUpdateManyWithoutProductInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [GalleryWhereUniqueInput_1.GalleryWhereUniqueInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], GalleryUpdateManyWithoutProductInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [GalleryWhereUniqueInput_1.GalleryWhereUniqueInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], GalleryUpdateManyWithoutProductInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [GalleryUpdateWithWhereUniqueWithoutProductInput_1.GalleryUpdateWithWhereUniqueWithoutProductInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], GalleryUpdateManyWithoutProductInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [GalleryUpdateManyWithWhereNestedInput_1.GalleryUpdateManyWithWhereNestedInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], GalleryUpdateManyWithoutProductInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [GalleryScalarWhereInput_1.GalleryScalarWhereInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], GalleryUpdateManyWithoutProductInput.prototype, "deleteMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [GalleryUpsertWithWhereUniqueWithoutProductInput_1.GalleryUpsertWithWhereUniqueWithoutProductInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], GalleryUpdateManyWithoutProductInput.prototype, "upsert", void 0);
GalleryUpdateManyWithoutProductInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], GalleryUpdateManyWithoutProductInput);
exports.GalleryUpdateManyWithoutProductInput = GalleryUpdateManyWithoutProductInput;
