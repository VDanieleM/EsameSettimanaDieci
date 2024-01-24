import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Album() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const { id } = useParams();
  const [album, setAlbum] = useState(null);

  const handleClick = (track) => {
    setCurrentTrack(track);
  };

  useEffect(() => {
    axios
      .get(`https://striveschool-api.herokuapp.com/api/deezer/album/${id}`)
      .then((response) => {
        setAlbum(response.data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  return album ? (
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
        <div className="col-md-3 pt-5 text-center" id="img-container">
          <img
            src={album.cover_big}
            className="card-img img-fluid"
            alt="Album"
          />
          <div className="mt-4 text-center">
            <p className="album-title">{album.title}</p>
          </div>
          <div className="text-center">
            <Link
              to={`/artist/${album.artist.id}`}
              className="text-decoration-none"
            >
              <p className="artist-name toArtistPage">{album.artist.name}</p>
            </Link>
          </div>
          <div className="mt-4 text-center">
            <button id="btnPlay" className="btn btn-success" type="button">
              Play
            </button>
          </div>
        </div>
        <div className="col-md-8 p-5">
          <div className="row">
            <div className="col-md-10 mb-5" id="trackList">
              {album.tracks.data.map((track, index) => (
                <div
                  key={index}
                  className="py-3 trackHover"
                  onClick={() => handleClick(track)}
                >
                  <a
                    href="#"
                    className="card-title trackHover px-3"
                    style={{ color: "white" }}
                  >
                    {track.title}
                  </a>
                  <small className="duration" style={{ color: "white" }}>
                    {Math.floor(track.duration / 60)}:
                    {track.duration % 60 < 10 ? "0" : ""}
                    {track.duration % 60}
                  </small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
}
