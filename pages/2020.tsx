import React, { memo } from "react";
import data from "../public/2020.json";
import ImagePreview from "../components/ImagePreview";

function Y2020() {
  return <ImagePreview imgList={data} />;
}

export default memo(Y2020);
