import { useParams } from "react-router";
import useProductsByCategory from "../../hooks/useProductsByCategory";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function CategoryProductsPage() {
  const { id } = useParams();
  const { data: products, isLoading, isError, error } = useProductsByCategory(id);

  if (isLoading) return <p>Loading category products...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Category Products</h1>
      {products.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product._id} productInfo={product} />
          ))}
        </div>
      )}
    </div>
  );
}

