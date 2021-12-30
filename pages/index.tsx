import React, { memo } from "react";
import data from "../public/data.json";
import ImagePreview from '../components/ImagePreview'

function Home() {
  return (
    <ImagePreview imgList={data}/>
  );
}

export default memo(Home);
