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
const preLoadCategories_1 = require("./helpers/preLoadCategories");
const preLoadProducts_1 = require("./helpers/preLoadProducts");
const dataSource_1 = require("./config/dataSource");
const Category_1 = require("./entities/Category");
const Product_1 = require("./entities/Product");
const seed = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield dataSource_1.AppDataSource.initialize();
        const categoryCount = yield dataSource_1.AppDataSource.manager.count(Category_1.Category);
        if (categoryCount === 0) {
            yield (0, preLoadCategories_1.preLoadCategories)();
        }
        // Repite la lógica para los productos
        const productCount = yield dataSource_1.AppDataSource.manager.count(Product_1.Product);
        if (productCount === 0) {
            yield (0, preLoadProducts_1.preLoadProducts)();
        }
        yield dataSource_1.AppDataSource.destroy();
        process.exit(0);
    }
    catch (error) {
        console.log("se produjo un error", error);
        process.exit(1);
    }
});
seed();
