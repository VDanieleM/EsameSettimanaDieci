import React from "react";
import MyRock from "../components/MyRock";
import MyPopC from "../components/MyPopC";
import MyHipHop from "../components/MyHipHop";

export default function Home() {
  return (
    <div className="mainPage" style={{ marginBottom: "10%" }}>
      <div className="row justify-content-center mt-4">
        <div className="col-10 mainLinks d-flex justify-content-between">
          <a href="#a" style={{ textDecoration: "none" }}>
            TRENDING
          </a>
          <a href="#b" style={{ textDecoration: "none" }}>
            PODCAST
          </a>
          <a href="#c" style={{ textDecoration: "none" }}>
            MOODS AND GENRES
          </a>
          <a href="#d" style={{ textDecoration: "none" }}>
            NEW RELEASES
          </a>
          <a href="#e" style={{ textDecoration: "none" }}>
            DISCOVER
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-10">
          <div id="rock">
            <h2>Rock Classics</h2>
            <div>
              <MyRock />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="pop">
            <h2>Pop Culture</h2>
            <div>
              <MyPopC />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="hiphop">
            <h2>HipHop</h2>
            <div>
              <MyHipHop />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
