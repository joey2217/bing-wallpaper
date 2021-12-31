import React, { memo } from "react";
import { Image } from "antd";
import {
  RotateLeft,
  RotateRight,
  ZoomIn,
  ZoomOut,
  Close,
  Left,
  Right,
  Download,
} from "../Icons";
import { getThumbnail, downImg } from "../../utils";
import { Img } from "../../types";
import styles from "./styles.module.css";

interface Props {
  imgList: Img[];
}

const ImagePreview: React.FC<Props> = ({ imgList }) => {
  return (
    <Image.PreviewGroup
      icons={{
        rotateLeft: RotateLeft,
        rotateRight: RotateRight,
        zoomIn: ZoomIn,
        zoomOut: ZoomOut,
        close: Close,
        left: Left,
        right: Right,
      }}
    >
      <div className={styles.grid}>
        {imgList.map((img, index) => (
          <div className={styles.item} key={img.date}>
            <Image
              className={styles.wallpaper}
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
            <div className={styles.download}>
              {Download}
              <span
                className={styles.downloadItem}
                onClick={() => downImg(img.img, 3840, 2160)}
              >
                4K
              </span>
              <span
                className={styles.downloadItem}
                onClick={() => downImg(img.img, 2560, 1440)}
              >
                2K
              </span>
              <span
                className={styles.downloadItem}
                onClick={() => downImg(img.img, 1920, 1080)}
              >
                1080P
              </span>
              <span
                className={styles.downloadItem}
                onClick={() => downImg(img.img)}
              >
                720P
              </span>
              <span style={{ marginLeft: "1rem" }}>{img.date}</span>
            </div>
            <div
              className={styles.copyright}
              // className="absolute opacity-50 bg-white text-black left-0 bottom-0 px-1 text-xs md:text-sm"
            >
              {img.copyright}
            </div>
          </div>
        ))}
      </div>
    </Image.PreviewGroup>
  );
};

export default memo(ImagePreview);
