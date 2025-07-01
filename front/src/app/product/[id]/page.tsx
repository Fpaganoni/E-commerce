//commponent
import ProductDetailComponent from "../../../components/ProductDetail";

export default async function Page({
  params,
}: {
  params?: Promise<{ id: string }>;
}) {
  const resolvedParams = params ? await params : { id: "" };

  if (!resolvedParams) {
    // Manejar error o mostrar fallback
    throw new Error("No params found");
  }

  return <ProductDetailComponent id={resolvedParams.id} />;
}
