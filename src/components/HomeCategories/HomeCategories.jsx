import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import HomecategoriesSkeleton from "../skeleton/HomecategoriesSkeleton";
import useCategories from "../../hooks/useCategories";

export default function HomeCategories() {
  const { categories, isLoading } = useCategories(); // removed unused vars

  if (isLoading) {
    return <HomecategoriesSkeleton />;
  }

  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Shop By Category</h2>
          <Link
            to={`/categories`}
            className="flex gap-2 items-center text-primary-600 hover:text-primary-700 transition-colors duration-200"
          >
            <span>View All Categories</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>

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
                className="w-16 h-16 rounded-full object-cover"
              />
              <h3>{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
