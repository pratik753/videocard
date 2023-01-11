import React, { useState } from "react";
import { div, Button } from "antd";
// import "./App.css";
const VideoY = () => {
  const [showdiv, setShowdiv] = useState(false);
  const [videoUrl, setVideoUrl] = useState(
    "https://www.youtube.com/embed/tgbNymZ7vqY"
  );
  const close = () => setShowdiv(false);
  const open = () => setShowdiv(true);
  return (
    <div className="App">
      <Button bsStyle="primary" bsSize="large" onClick={open}>
        Launch demo modal
      </Button>
      <div>
        <div>
          <div>div heading</div>
        </div>
        <div>
          <iframe
            width="560"
            height="315"
            src={videoUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div>
          <Button onClick={close}>Close</Button>
        </div>
      </div>
    </div>
  );
};
export default VideoY;
