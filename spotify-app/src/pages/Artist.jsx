import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ArtistPage = () => {
  const [artist, setArtist] = useState(null);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const artistId = window.location.pathname.split("/").pop();

    fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setArtist(data);
        return fetch(data.tracklist);
      })
      .then((response) => response.json())
      .then((data) => {
        setTracks(data.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="mainPage" style={{ marginBottom: "10%" }}>
      <div>
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
          <div className="col-12 col-md-10 col-lg-10 mt-5">
            <h2 className="titleMain">{artist ? artist.name : "Loading..."}</h2>
            <div id="followers">
              {artist ? artist.followers : "Loading..."} followers
            </div>
            <div
              className="d-flex justify-content-between mt-4"
              style={{ width: "20%", margin: "0 0 0 auto" }}
              id="button-container"
            >
              <button
                className="btn btn-success mr-2 mainButton d-inline"
                id="playButton"
              >
                PLAY
              </button>
              <button
                className="btn btn-outline-light mainButton d-inline"
                id="followButton"
              >
                FOLLOW
              </button>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-10 offset-1 col-md-10 col-lg-10 p-0">
            <div className="mt-4 d-flex justify-content-start">
              <h2 className="text-white font-weight-bold">Tracks</h2>
            </div>
            <div className="pt-5 mb-5">
              <div className="row" id="apiLoaded">
                {tracks.map((track, index) => (
                  <div
                    key={index}
                    className="col-sm-auto col-md-auto text-center mb-5"
                    style={{ width: "200px" }}
                  >
                    <Link
                      className="toAlbumPage"
                      to={`/album/${track.album.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        className="img-fluid"
                        src={track.album.cover_big}
                        alt={index + 1}
                      />
                      <p href={track.link} className="fw-normal">
                        {track.title}
                      </p>
                      <br />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistPage;
