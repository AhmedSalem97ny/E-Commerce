// src/pages/BrandDetails.jsx
import { useParams } from "react-router";
import { useBrandById } from "../../hooks/UseBrands";

export default function BrandDetails() {
  const { id } = useParams();
  const { data, isLoading, isError } = useBrandById(id);

  if (isLoading) return <p>Loading brand...</p>;
  if (isError) return <p>Failed to load brand</p>;

  const brand = data?.data;
console.log(data);

  return (
    <div className="text-center">
      <img src={brand.image} alt={brand.name} className="mx-auto" />
      <h2 className="text-2xl font-bold mt-4">{brand.name}</h2>
      
    </div>
  );
}
