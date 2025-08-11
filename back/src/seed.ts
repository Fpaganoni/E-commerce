import { preLoadCategories } from "./helpers/preLoadCategories";
import { preLoadProducts } from "./helpers/preLoadProducts";
import { AppDataSource } from "./config/dataSource";

const seed = async () => {
  try {
    // Initialize db
    await AppDataSource.initialize();

    // Preload categories
    await preLoadCategories();

    // Preload products
    await preLoadProducts();
  } catch (error) {
    process.exit(1);
  }
};

seed();
