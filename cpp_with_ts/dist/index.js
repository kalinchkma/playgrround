"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addon_node_1 = __importDefault(require("./build/Release/addon.node"));
console.log(addon_node_1.default.myMethod()); // Outputs: Hello from C++!
