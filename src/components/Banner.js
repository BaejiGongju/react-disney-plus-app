import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import requests from '../api/request';

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // 현재 상영중인 영화들 정보 가져오기
    // axios.get('https://api.themoviedb.org/3/movie/now_playing')
    const response = await axios.get(requests.fetchNowPlaying);

    // 여러 영화 중 영화 하나의 ID 가져오기
    const movieId =
      response.data.results[
        Math.floor(Math.random() * response.data.results.length)
      ].id;

    // 위 ID의 영화의 더 상세한 정보를 가져오기 (비디오 정보도 포함)
    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: 'videos' },
    });

    setMovie(movieDetail);
  };

  return <div>Banner</div>;
};

export default Banner;
