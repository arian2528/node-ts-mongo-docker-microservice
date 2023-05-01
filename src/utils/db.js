"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDb = void 0;
const mongoose_1 = require("mongoose");
function connectToDb() {
    return __awaiter(this, void 0, void 0, function* () {
        const MONGO_URL = process.env.MONGO_URL || "mongodb://mongo:27017/default-db";
        console.log('MONGO_URL: ', MONGO_URL);
        try {
            yield mongoose_1.default.connect(MONGO_URL);
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
        console.log("Connected to MongoDB");
    });
}
exports.connectToDb = connectToDb;
