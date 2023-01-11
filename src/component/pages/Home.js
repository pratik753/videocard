import React, { useEffect, useState } from "react";

import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import CardU from "../card/CardU";
import VideoAdd from "../video/VideoAdd";
import VideoModel from "../video/VideoModel";
import VideoPlay from "../video/VideoPlay";
import DragAndDrop from "./DragAndDrop";
import { useSelector } from "react-redux";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import HistroyPage from "./HistroyPage";
import { useHistory, useLocation } from "react-router";
import VideoY from "../video/VideoY";

const { Header, Content, Sider } = Layout;

const items1 = ["Home", "Histroy"].map((key) => ({
  key,
  label: `${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);
const Home = () => {
  const history = useHistory();
  // const vcards = useSelector((state) => state.vcards);
  const [editData, setEditData] = useState({
    name: "",
    turl: "",
    vurl: "",
  });
  const [pageNo, setPageNo] = useState(0);
  const [ent, setEnt] = useState([]);
  const [edu, setEdu] = useState([]);
  // useEffect(() => {
  //   setEdu(vcards);
  // }, [vcards]);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const changePage = (val) => {
    // console.log(selectedKeys, "hidd");
    // history.push(val);
    if (val == "/") {
      setPageNo(0);
    } else if (val == "/historyPage") {
      setPageNo(1);
    }
  };

  const onDragEnd = (result) => {
    const { destination, source } = result;

    // console.log(result);
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add,
      active = edu,
      complete = ent;
    if (source.droppableId === "edu") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }
    // Destination Logic
    if (destination.droppableId === "edu") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }
    setEdu(active);
    setEnt(complete);
  };
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />

        <span
          style={{ color: "white", fontWeight: "600", margin: "1rem" }}
          onClick={() => changePage("/")}
        >
          Home
        </span>
        <span
          style={{ color: "white", fontWeight: "600", margin: "1rem" }}
          onClick={() => changePage("/historyPage")}
        >
          History
        </span>
        {/* <span>Home</span> */}
      </Header>
      <Layout>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            {pageNo == 0 && (
              <div>
                <VideoAdd
                  editData={editData}
                  ent={ent}
                  edu={edu}
                  setEditData={setEditData}
                  setEdu={setEdu}
                  setEnt={setEnt}
                />
                <DragDropContext onDragEnd={onDragEnd}>
                  <DragAndDrop
                    edu={edu}
                    setEdu={setEdu}
                    ent={ent}
                    setEnt={setEnt}
                    setEditData={setEditData}
                  />
                </DragDropContext>
              </div>
            )}
            {pageNo == 1 && <HistroyPage />}
            {/* <VideoY /> */}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Home;
