import React from "react";
import { connect } from "react-redux";
import Next from "../assets/playerbuttons/Next.png";
import Shuffle from "../assets/playerbuttons/Shuffle.png";
import Play from "../assets/playerbuttons/Play.png";
import Previous from "../assets/playerbuttons/Previous.png";
import Repeat from "../assets/playerbuttons/Repeat.png";

function mapStateToProps(state) {
  return {
    currentSong: state.currentSong,
  };
}

function Player(props) {
  const { currentSong } = props;

  if (!currentSong) {
    return (
      <div className="container-fluid fixed-bottom bg-container pt-1">
        <div className="row">
          <div className="col-lg-10 offset-lg-2">
            <div className="row">
              <div className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
                <div className="d-flex align-items-center justify-content-between">
                  <a href="#">
                    <img src={Shuffle} alt="shuffle" />
                  </a>
                  <a href="#">
                    <img src={Previous} alt="previous" />
                  </a>
                  <a href="#">
                    <img src={Play} alt="play" />
                  </a>
                  <a href="#">
                    <img src={Next} alt="next" />
                  </a>
                  <a href="#">
                    <img src={Repeat} alt="repeat" />
                  </a>
                </div>
              </div>
            </div>
            <div className="row justify-content-center playBar py-3">
              <div className="col-8 col-md-6">
                <div
                  className="progress"
                  style={{
                    color: "white",
                    backgroundColor: "#414141",
                    height: "3px",
                  }}
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row">
        <div className="col-lg-10 offset-lg-2">
          <div className="row">
            <div className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <p
                    className="text-secondary fw-bold mb-0 me-3"
                    style={{ fontSize: "12px" }}
                  >
                    {currentSong.title}
                  </p>
                  <img
                    src={currentSong.albumCover}
                    alt="Album cover"
                    width="40"
                    className="rounded"
                  />
                </div>
                <a href="#">
                  <img src={Shuffle} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={Previous} alt="previous" />
                </a>
                <a href="#">
                  <img src={Play} alt="play" />
                </a>
                <a href="#">
                  <img src={Next} alt="next" />
                </a>
                <a href="#">
                  <img src={Repeat} alt="repeat" />
                </a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center playBar py-3">
            <div className="col-8 col-md-6">
              <div
                className="progress"
                style={{
                  color: "white",
                  backgroundColor: "#414141",
                  height: "3px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(Player);
