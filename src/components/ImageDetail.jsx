import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createClient } from "pexels";


const client = createClient(
  "563492ad6f917000010000013be4449d801c4ac68d2ebb0825b6af1a"
);

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const response = await client.photos.show({ id: id });
      setProduct(response);
    }
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.photographer}</h2>
      <img src={product.photographer_url} alt={product.photographer}></img>
      <p></p>
      <img src={product.src.medium} alt={product.alt}></img>
    </div>
  );
}
export default ProductDetails;
