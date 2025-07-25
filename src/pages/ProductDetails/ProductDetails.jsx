import ProductPage from "../../components/ProductInfo/ProductInfo";
import ProductDetailsSection from "../../components/ProductDetailsTabs/ProductDetailsTabs";
import YouMayAlsoLike from "../../components/RelatedProducts/RelatedProducts";
import { useParams } from "react-router";
import Loading from "../../components/Loading/Loading";
import { useProductDetails } from "../../hooks/useProductDetail";
import PageMetaData from "../../components/PageMetaData/PageMetaData";

export default function ProductDetails() {
  const { id } = useParams();

  const { isLoading, isError, error, productDetails } = useProductDetails(id);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <PageMetaData
        title={productDetails.title}
        description={productDetails.description}
      />
      <ProductPage productDetails={productDetails} />
      <ProductDetailsSection productDetails={productDetails} />
      <YouMayAlsoLike productDetails={productDetails} />
    </>
  );
}
