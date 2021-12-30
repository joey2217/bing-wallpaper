import type { NextPage } from "next";
import { Button } from "antd";
import { useState } from "react";
import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";

dayjs.extend(weekOfYear);
// TODO 筛选重复数据
const Home: NextPage = () => {
  const [date, setDate] = useState(dayjs());
  return (
    <div>
      <Button type="primary">Button</Button>
      <span>
        {date.year()}
        {date.week()}
      </span>
    </div>
  );
};

export default Home;
