import { useParams } from "react-router-dom";
import useProductsByCategory from "../../hooks/useProductsByCategory";
import ProductCard from "../ProductCard/ProductCard"; // if using cards

export default function CategoryProductsPage() {
  const { id } = useParams();
  const { data: products, isLoading, isError } = useProductsByCategory(id);

  if (isLoading) return <p className="text-center">Loading products...</p>;
  if (isError) return <p className="text-center text-red-500">Failed to load products.</p>;

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
      {products?.length > 0 ? (
        products.map((product) => <ProductCard key={product._id} productInfo={product} />)
      ) : (
        <p className="col-span-full text-center text-gray-500">No products found in this category.</p>
      )}
    </div>
  );
}
