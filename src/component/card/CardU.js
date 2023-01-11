import React, { useState } from "react";
import { Card, Col, Row, Typography } from "antd";
import VideoModel from "../video/VideoModel";
import { Draggable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
const { Text, Link } = Typography;
const { Meta } = Card;
const CardU = ({ data, id, index, turl, vurl, name, deleteh, edith }) => {
  const dispatch = useDispatch();
  const [vedio, setVideo] = useState(vurl);
  const [visible, setVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(index, id, "gug");
  const showModal = (vurl) => {
    setIsModalOpen(true);
    setVideo(vurl);
    setVisible(true);
    const datet = new Date();
    console.log("current Time", datet);

    dispatch({
      type: "HISTORYADD",
      payload: { date: datet.toString(), name: "pratik", vlink: vurl },
    });
  };
  const deleteHandler = (id) => {
    deleteh(id);
  };
  const editHandler = (id) => {
    edith(id);
  };
  return (
    <Draggable draggableId={id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          className="site-card-wrapper"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <VideoModel
            visible={visible}
            setVisible={setVisible}
            vurl={vedio}
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
          />
          <Col
            span={6}
            style={{ marginTop: ".5rem" }}
            onClick={() => showModal(vurl)}
          >
            <Card
              hoverable
              style={{ width: 180 }}
              cover={<img alt="example" src={turl} />}
            >
              <Meta title={name} description={vurl} />
            </Card>
          </Col>
          <Text
            style={{
              margin: "2rem",
              borderRadius: ".2rem",
              background: "pink",
              padding: ".2rem",
            }}
            strong
            onClick={() => editHandler(data)}
          >
            Edit
          </Text>
          <Text
            style={{
              margin: "2rem",
              borderRadius: ".2rem",
              background: "grey",
              padding: ".2rem",
              // marginTop: "3rem",
            }}
            strong
            onClick={() => deleteHandler(id)}
          >
            Delete
          </Text>
        </div>
      )}
    </Draggable>
  );
};
export default CardU;
