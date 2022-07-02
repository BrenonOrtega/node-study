"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prettyPrint = void 0;
const log = console.log;
const prettyPrint = (text) => {
    var stars = "*".repeat(text.length);
    log(stars);
    log(text);
    log(stars);
};
exports.prettyPrint = prettyPrint;
