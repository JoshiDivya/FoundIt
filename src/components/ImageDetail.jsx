import React from "react";
import { useParams } from "react-router-dom";

const ImageDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Hiii</h2>
      {id}
    </div>
  );
};
export default ImageDetail;
