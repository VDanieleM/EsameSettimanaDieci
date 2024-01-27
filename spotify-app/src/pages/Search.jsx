// SearchPage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Search() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");

  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
      );
      const data = await response.json();
      setResults(data.data);
      console.log(data.data);
    };

    fetchResults();
  }, [query]);

  return (
    <div>
      {results.length === 0 ? (
        <h1 className="text-center text-white pt-5">
          Nessun risultato per {query}
        </h1>
      ) : (
        <>
          <h1 className="text-center text-white pt-5">
            Risultati ricerca per {query}
          </h1>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              paddingTop: "50px",
            }}
          >
            {results.map((result, index) => (
              <div
                key={index}
                className="border-none text-center me-5 mb-5 p-5 rounded-3"
                style={{ background: "rgba(0, 0, 0, 0.3)", width: "24%" }}
              >
                <Link
                  to={`/album/${result.album.id}`}
                  className="toAlbumPage fw-lighter mb-1 mt-2"
                >
                  <img
                    src={result.album.cover_medium}
                    className="card-img-top"
                    alt="Album Cover"
                    style={{ width: "150px", height: "150px" }}
                  />
                  <p className="mb-0 mt-2 fw-bold">
                    <span> {result.title}</span>
                  </p>
                </Link>
                <Link
                  to={`/artist/${result.artist.id}`}
                  className="text-decoration-none"
                >
                  <span className="toArtistPage artist-name fw-normal">
                    {result.artist.name}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Search;
