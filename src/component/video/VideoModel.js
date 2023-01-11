import React, { useState } from "react";
import { Button, Modal } from "antd";
import VideoPlay from "./VideoPlay";
import { useDispatch, useSelector } from "react-redux";

const VideoModel = ({
  visible,
  setVisible,
  vurl,
  isModalOpen,
  setIsModalOpen,
}) => {
  // const dispatch = useDispatch();

  const showModal = () => {
    setIsModalOpen(true);
    // dispatch({ type: "HISTORYADD", payload: [8] });
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  console.log(vurl, "vurl");
  return (
    <>
      {/* <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      > */}
      <VideoPlay
        showModal={showModal}
        visible={visible}
        setVisible={setVisible}
        vurl={vurl}
      />
      {/* </Modal> */}
    </>
  );
};
export default VideoModel;
