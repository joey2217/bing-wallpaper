import React, { memo } from "react";
import Image from "rc-image";
import {
  RotateLeft,
  RotateRight,
  ZoomIn,
  ZoomOut,
  Close,
  Left,
  Right,
  Download,
} from "../components/Icons";
import { getThumbnail, downImg } from "../utils";

interface Img {
  img: string;
  date: string;
  copyright: string;
}

interface Props {
  imgList: Img[];
}

const ImagePreview: React.FC<Props> = ({imgList}) => {
  return (
    <Image.PreviewGroup
      icons={{
        rotateLeft: <RotateLeft />,
        rotateRight: <RotateRight />,
        zoomIn: <ZoomIn />,
        zoomOut: <ZoomOut />,
        close: <Close />,
        left: <Left />,
        right: <Right />,
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {imgList.map((img, index) => (
          <div
            className={`relative flex ${
              index === 0 &&
              "row-span-2 col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2"
            }`}
            key={img.date}
          >
            <Image
              className="object-cover block wallpaper-image"
              src={
                index === 0
                  ? getThumbnail(img.img, 768, 432)
                  : getThumbnail(img.img)
              }
              preview={{
                src: img.img,
              }}
              placeholder={<img src="/loading.png" alt="loading" />}
              alt={img.date + "-BingWallpaper"}
              loading="lazy"
            />
            <div className="absolute flex w-full items-center truncate top-0 right-0 opacity-50  bg-white text-black px-1 text-xs md:text-sm">
              <Download />
              <span
                className="underline text-blue-800 cursor-pointer px-1"
                onClick={() => downImg(img.img, 3840, 2160)}
              >
                4K
              </span>
              <span
                className="underline text-blue-800 cursor-pointer px-1"
                onClick={() => downImg(img.img, 2560, 1440)}
              >
                2K
              </span>
              <span
                className="underline text-blue-800 cursor-pointer px-1"
                onClick={() => downImg(img.img, 1920, 1080)}
              >
                1080P
              </span>
              <span
                className="underline text-blue-800 cursor-pointer px-1"
                onClick={() => downImg(img.img)}
              >
                720P
              </span>
              <span className="ml-auto">{img.date}</span>
            </div>
            <div className="absolute opacity-50 bg-white text-black left-0 bottom-0 px-1 text-xs md:text-sm">
              {img.copyright}
            </div>
          </div>
        ))}
      </div>
    </Image.PreviewGroup>
  );
};

export default memo(ImagePreview);
