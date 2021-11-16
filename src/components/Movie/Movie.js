/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './index.scss';

require('dotenv').config();

const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

function Movie() {
  const [data, setData] = useState([]);

  const getMovies = axios.get(
    `${process.env.REACT_APP_BASE_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );

  useEffect(() => {
    getMovies.then((res) => {
      setData(res.data.results);
    })
    .catch((err)=>console.log(err))
  }, []);

  return (
    <div className="content-wrapper">
      <div className="content-wrapper-item">
        {data.map((movies) => (
          <div className="item" key={movies.id}>
            <Link to={`/movie/${movies.id}`}>
              <img src={getImage(movies.poster_path)} />
            </Link>
            <p className="title">{movies.original_title}</p>
            <p className="title">{movies.release_date}</p>
            <p className="title rate">{movies.vote_average}</p>
            <Link to={`/movie/${movies.id}`} className="link">More Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movie;
