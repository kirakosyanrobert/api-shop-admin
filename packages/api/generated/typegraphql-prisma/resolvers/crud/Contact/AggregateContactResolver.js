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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateContactResolver = void 0;
const TypeGraphQL = require("type-graphql");
const graphql_fields_1 = require("graphql-fields");
const AggregateContactArgs_1 = require("./args/AggregateContactArgs");
const Contact_1 = require("../../../models/Contact");
const AggregateContact_1 = require("../../outputs/AggregateContact");
let AggregateContactResolver = class AggregateContactResolver {
    async aggregateContact(ctx, info, args) {
        function transformFields(fields) {
            return Object.fromEntries(Object.entries(fields)
                .filter(([key, value]) => !key.startsWith("_"))
                .map(([key, value]) => {
                if (Object.keys(value).length === 0) {
                    return [key, true];
                }
                return [key, transformFields(value)];
            }));
        }
        return ctx.prisma.contact.aggregate({
            ...args,
            ...transformFields(graphql_fields_1.default(info)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => AggregateContact_1.AggregateContact, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateContactArgs_1.AggregateContactArgs]),
    __metadata("design:returntype", Promise)
], AggregateContactResolver.prototype, "aggregateContact", null);
AggregateContactResolver = __decorate([
    TypeGraphQL.Resolver(_of => Contact_1.Contact)
], AggregateContactResolver);
exports.AggregateContactResolver = AggregateContactResolver;
