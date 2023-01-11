import React, { Component, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { Button, Modal } from "antd";
import { Player } from "video-react";
import { useDispatch, useSelector } from "react-redux";

import "video-react/dist/video-react.css";
// import "./styles.css";

const VideoPlay = ({ vurl, visible, setVisible }) => {
  const videoRef = useRef();
  console.log(vurl, "vid");
  // const [vlink, setVlink] = useState(vurl);
  // const dispatch = useDispatch();

  const [isPause, setPause] = useState(true);
  //   state = { visible: false };
  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  const pause = () => {
    setPause(false);
    // videoRef.current.onpause();
    console.log(videoRef);

    // setVlink("");
    // videoRef.pause();

    videoRef?.current.load();
    videoRef?.current.pause();
    // vcurrent[counter] = r
    // videoRef.current;
  };

  return (
    <div className="App">
      <Modal
        // ref={(r) => (videoRef.current[counter] = r)}
        title="Video"
        visible={visible}
        footer={null}
        onCancel={hideModal}
        afterClose={pause}
        bodyStyle={{ padding: 0 }}
      >
        {/* <iframe
          width="560"
          height="315"
          src={vurl}
          ref={videoRef}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        /> */}
        <Player autoPlay ref={videoRef} pause={isPause}>
          <source src={vurl} type="video/mp4" />
        </Player>
      </Modal>
    </div>
  );
};
export default VideoPlay;
