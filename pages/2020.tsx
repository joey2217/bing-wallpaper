import type { NextPage } from "next";
import ImagePreview from "../components/ImagePreview";
import list  from '../public/2020.json'

const Home: NextPage = () => {
  return <ImagePreview imgList={list} />;
};

export default Home;
