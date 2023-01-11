import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Space, Typography } from "antd";
const { Text, Link } = Typography;
const HistroyPage = () => {
  //   const vcards = useSelector((state) => state.vcards);

  const histroyvideo = useSelector((state) => state.historyvideo);
  console.log(histroyvideo, "histroyvideo");
  return (
    <div>
      <h3>HistroyPage</h3>
      <div>
        {histroyvideo?.map((data, index) => (
          <div>
            <Text strong>{index + 1}. </Text>
            <Text strong>{data.name}.</Text>
            <Text strong> Date:</Text>
            <Text mark style={{ margin: "1rem" }}>
              {data?.date}
            </Text>
            {/* <Text strong> Time:</Text> */}
            <Text mark style={{ margin: "1rem" }}>
              {/* {data.date.split("T")[1].substring(0, 8)} */}
            </Text>
            <Text strong style={{ margin: "1rem" }}>
              Video Link: {data?.vlink}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistroyPage;
