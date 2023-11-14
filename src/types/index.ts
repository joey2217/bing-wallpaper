export interface BingItem {
  img: string
  date: string
  copyright: string
}

export interface ListData<T> {
  errno: string
  errmsg: string
  consume: string
  total: string
  data: T
}

export interface Cate {
  id: string
  pjt: string
  name: string
  order_num: string
  tag: string
  create_time: string
  order_createtime_hidden: string
  mobile_hidden: string
}

export interface ImgData {
  id: string;
  class_id: string;
  resolution: string;
  url_mobile: string;
  url: string;
  url_thumb: string;
  url_mid: string;
  download_times: string;
  imgcut: string;
  tag: string;
  create_time: string;
  update_time: string;
  ad_id: string;
  ad_img: string;
  ad_pos: string;
  ad_url: string;
  ext_1: string;
  ext_2: string;
  utag: string;
  tempdata: string;
  rdata: any[];
  img_1600_900: string;
  img_1440_900: string;
  img_1366_768: string;
  img_1280_800: string;
  img_1280_1024: string;
  img_1024_768: string;
}