import { preLoadCategories } from "./helpers/preLoadCategories";
import { preLoadProducts } from "./helpers/preLoadProducts";
import { AppDataSource } from "./config/dataSource";
import { Category } from "./entities/Category";
import { Product } from "./entities/Product";

const seed = async () => {
  try {
    await AppDataSource.initialize();

    const categoryCount = await AppDataSource.manager.count(Category);
    if (categoryCount === 0) {
      await preLoadCategories();
    }

    // Repite la lógica para los productos
    const productCount = await AppDataSource.manager.count(Product);
    if (productCount === 0) {
      await preLoadProducts();
    }

    await AppDataSource.destroy();
    process.exit(0);
  } catch (error) {
    process.exit(1);
  }
};

seed();
