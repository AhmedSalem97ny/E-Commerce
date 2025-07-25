import React from "react";

export default function PageMetaData({
  title = "FreshCart",
  description = "Your one-stop online shopping destination",
  keywords= "shopping, online store, ecommerce, freshcart",
  author= "FreshCart Team",
}) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
    </>
  );
}
