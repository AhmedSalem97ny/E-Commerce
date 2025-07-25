import React from "react";
import { Link } from "react-router";

export default function CategoriesComponent({ categories }) {
  if (!categories || categories.length === 0) {
    return <p className="py-4">No categories found.</p>;
  }

  return (
    <div className="grid py-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {categories.map((category) => (
        <Link
          to={`/category/${category._id}`}
          key={category._id}
          className="card cursor-pointer p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200 bg-white flex flex-col gap-2 items-center"
        >
          <img
            src={category.image}
            alt={category.name}
            className="size-16 rounded-full object-cover"
          />
          <h3>{category.name}</h3>
        </Link>
      ))}
    </div>
  );
}
