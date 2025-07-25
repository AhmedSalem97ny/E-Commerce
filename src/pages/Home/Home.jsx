import React from "react";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import HomeFeatures from "../../components/HomeFeatures/HomeFeatures";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import HomeDeals from "../../components/HomeDeals/HomeDeals";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import PageMetaData from "../../components/PageMetaData/PageMetaData";

export default function Home() {
  return (
    <>
      <PageMetaData title="Home Page" description="Fresh Cart Home Page"  />
      <HomeSlider />
      <HomeFeatures />
      <HomeCategories />
      <HomeDeals />
      <FeaturedProducts />
    </>
  );
}
