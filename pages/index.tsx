import type { NextPage } from "next";
import ImagePreview from "../components/ImagePreview";
import list  from '../public/data.json'

const Home: NextPage = () => {
  return <ImagePreview imgList={list} />;
};

export default Home;
