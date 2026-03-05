"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_SECRET = exports.DB_URL = exports.DB_PORT = exports.DB_HOST = exports.DB_PASSWORD = exports.DB_USER = exports.DB_NAME = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.PORT = Number(process.env.PORT) || 4001;
exports.DB_NAME = process.env.DB_NAME || "project_m4";
exports.DB_USER = process.env.DB_USER || "postgres";
exports.DB_PASSWORD = process.env.DB_PASSWORD || "Jau*Retche1020";
exports.DB_HOST = process.env.DB_HOST || "localhost";
exports.DB_PORT = Number(process.env.DB_PORT) || 5432;
exports.DB_URL = process.env.DATABASE_URL;
exports.JWT_SECRET = process.env.JWT_SECRET || "JsonToken";
