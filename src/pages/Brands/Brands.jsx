import React from "react";
import { useAllBrands } from "../../hooks/UseBrands";
import { Link } from "react-router";

export default function Brands() {
  const { data, isLoading, isError } = useAllBrands({ limit: 20 });

  if (isLoading) return <p>Loading brands...</p>;
  if (isError) return <p>Failed to load brands.</p>;

  return (
    <div className="container mx-auto p-4 text-center">
      <h2 className="text-3xl mx-auto my-4 font-bold">All Brands</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: "20px",
        }}
      >
       {data.data?.map((brand) => (
  <div key={brand._id} style={{ textAlign: "center" }}>
    <Link to={`/brands/${brand._id}`}>
      <img
        src={brand.image}
        alt={brand.name}
        style={{ width: "100px", height: "auto", margin: "0 auto" }}
      />
      
    </Link>
  </div>
))}
      </div>
    </div>
  );
}
