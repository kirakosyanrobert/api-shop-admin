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
exports.GalleryUpdateWithWhereUniqueWithoutProductInput = void 0;
const TypeGraphQL = require("type-graphql");
const GalleryUpdateWithoutProductDataInput_1 = require("../inputs/GalleryUpdateWithoutProductDataInput");
const GalleryWhereUniqueInput_1 = require("../inputs/GalleryWhereUniqueInput");
let GalleryUpdateWithWhereUniqueWithoutProductInput = class GalleryUpdateWithWhereUniqueWithoutProductInput {
};
__decorate([
    TypeGraphQL.Field(_type => GalleryWhereUniqueInput_1.GalleryWhereUniqueInput, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", GalleryWhereUniqueInput_1.GalleryWhereUniqueInput)
], GalleryUpdateWithWhereUniqueWithoutProductInput.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => GalleryUpdateWithoutProductDataInput_1.GalleryUpdateWithoutProductDataInput, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", GalleryUpdateWithoutProductDataInput_1.GalleryUpdateWithoutProductDataInput)
], GalleryUpdateWithWhereUniqueWithoutProductInput.prototype, "data", void 0);
GalleryUpdateWithWhereUniqueWithoutProductInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], GalleryUpdateWithWhereUniqueWithoutProductInput);
exports.GalleryUpdateWithWhereUniqueWithoutProductInput = GalleryUpdateWithWhereUniqueWithoutProductInput;
