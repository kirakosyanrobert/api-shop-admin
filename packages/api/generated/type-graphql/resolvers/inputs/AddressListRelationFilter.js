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
exports.AddressListRelationFilter = void 0;
const TypeGraphQL = require("type-graphql");
const AddressWhereInput_1 = require("../inputs/AddressWhereInput");
let AddressListRelationFilter = class AddressListRelationFilter {
};
__decorate([
    TypeGraphQL.Field(_type => AddressWhereInput_1.AddressWhereInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", AddressWhereInput_1.AddressWhereInput)
], AddressListRelationFilter.prototype, "every", void 0);
__decorate([
    TypeGraphQL.Field(_type => AddressWhereInput_1.AddressWhereInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", AddressWhereInput_1.AddressWhereInput)
], AddressListRelationFilter.prototype, "some", void 0);
__decorate([
    TypeGraphQL.Field(_type => AddressWhereInput_1.AddressWhereInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", AddressWhereInput_1.AddressWhereInput)
], AddressListRelationFilter.prototype, "none", void 0);
AddressListRelationFilter = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], AddressListRelationFilter);
exports.AddressListRelationFilter = AddressListRelationFilter;
