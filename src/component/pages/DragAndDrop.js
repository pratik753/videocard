import React, { useState } from "react";
import CardU from "../card/CardU";
import { Card, Col, Row } from "antd";
import { useSelector } from "react-redux";
import { Droppable } from "react-beautiful-dnd";

const DragAndDrop = ({ ent, setEnt, edu, setEdu, setEditData }) => {
  // const vcards = useSelector((state) => state.vcards);
  const deleteh = (uid) => {
    let e1 = edu.filter((data) => data.id !== uid);
    let e2 = ent.filter((data) => data.id !== uid);
    setEdu(e1);
    setEnt(e2);
  };
  const edith = (data) => {
    // edu.map((post) =>
    //   tours._id === action.payload._id ? action.payload : post
    // );
    // let e1 = edu.filter((data) => data.id !== uid);
    // let e2 = ent.filter((data) => data.id !== uid);
    setEditData(data);
    console.log(data);
    // setEdu(e1);
    // setEnt(e2);
  };
  // console.log(edu);
  return (
    <div>
      <Row>
        <Col
          span={11}
          style={{
            border: "4px solid red",
            marginRight: "7px",
            padding: ".3rem",
          }}
        >
          <h3 style={{ marginTop: "-.4rem" }}>Education</h3>
          <Droppable droppableId="edu">
            {(provided, snapshot) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <Row gutter={16} style={{ marginBottom: "1rem" }}>
                  {edu.map((data, index) => (
                    <CardU
                      // onClick={showModal}
                      data={data}
                      id={data.id}
                      index={index}
                      vurl={data.vurl}
                      turl={data.turl}
                      name={data.name}
                      deleteh={deleteh}
                      edith={edith}
                    />
                  ))}
                  {provided.placeholder}
                </Row>
              </div>
            )}
          </Droppable>
        </Col>
        <Col
          span={11}
          style={{
            border: "4px solid green",
            marginLeft: "2rem",
            padding: ".3rem",
          }}
        >
          <h3 style={{ marginTop: "-.4rem" }}>Entertainment</h3>
          <Droppable droppableId="enter">
            {(provided, snapshot) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <Row gutter={16} style={{ marginBottom: ".1rem" }}>
                  {ent.map((data, index) => (
                    <CardU
                      data={data}
                      id={data.id}
                      index={index}
                      vurl={data.vurl}
                      turl={data.turl}
                      name={data.name}
                      deleteh={deleteh}
                      edith={edith}
                    />
                  ))}
                  {provided.placeholder}
                </Row>
              </div>
            )}
          </Droppable>
        </Col>
      </Row>
    </div>
  );
};

export default DragAndDrop;
