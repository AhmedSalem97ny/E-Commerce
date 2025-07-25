import React from "react";
import useCategories from "../../hooks/useCategories";
import CategoriesComponent from "../../components/CategoriesComponent/CategoriesComponent";
import HomecategoriesSkeleton from "../../components/skeleton/HomecategoriesSkeleton";

export default function Categories() {
  const { categories, isLoading, isError } = useCategories();

  if (isLoading) return <HomecategoriesSkeleton />;
  if (isError) return <div className="text-center text-red-500">Error loading categories.</div>;

  return (
    <div className="py-8">
      <div className="container">
        <h1 className="text-3xl font-bold mb-6">All Categories</h1>
        <CategoriesComponent categories={categories} />
      </div>
    </div>
  );
}
