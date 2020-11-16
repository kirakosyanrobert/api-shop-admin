"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.relationResolvers = exports.crudResolvers = exports.resolvers = void 0;
const crudResolvers = require("./resolvers/crud/resolvers-crud.index");
exports.crudResolvers = crudResolvers;
const relationResolvers = require("./resolvers/relations/resolvers.index");
exports.relationResolvers = relationResolvers;
__exportStar(require("./enums"), exports);
__exportStar(require("./models"), exports);
__exportStar(require("./resolvers/crud"), exports);
__exportStar(require("./resolvers/relations"), exports);
__exportStar(require("./resolvers/inputs"), exports);
__exportStar(require("./resolvers/outputs"), exports);
exports.resolvers = [...Object.values(crudResolvers), ...Object.values(relationResolvers)];
