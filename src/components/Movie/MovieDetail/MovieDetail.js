/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './index.scss';

require('dotenv').config();

const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

function MovieDetail() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  async function fetchMovieDetails() {
    axios.get(
      `${process.env.REACT_APP_BASE_URL}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
    ).then((res) => {
      setMovieDetails({
        title: res.data.title,
        overview: res.data.overview,
        poster_path: res.data.poster_path,
        genres: res.data.genres[0].name,
        prod_company: res.data.production_companies[0].name,
        release: res.data.release_date
      });
    });
  }

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  return (
    <div className="detail-wrapper">
      <img src={getImage(movieDetails.poster_path)} alt={movieDetails.title} className="detail-wrapper-image" />
      <section className="detail-wrapper-section">
        <h1 className="detail-wrapper-section__title">{movieDetails.title}</h1>
        <h3 className="detail-wrapper-section__item">{movieDetails.overview}</h3>
        <p className="detail-wrapper-section__item">Genres : {movieDetails.genres}</p>
        <p className="detail-wrapper-section__item">Production Company : {movieDetails.prod_company}</p>
        <p>Release Date : {movieDetails.release}</p>

        <Link to="/" className="detail-wrapper-section__link">Return to Homepage</Link>
      </section>
    </div>
  );
}

export default MovieDetail;
