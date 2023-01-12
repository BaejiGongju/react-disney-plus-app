import React, { useCallback, useEffect, useState } from 'react';
import './Row.css';
import axios from '../api/axios';
import MovieModal from './MovieModal';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper style
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import styled from 'styled-components';

const Row = ({ title, id, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelection] = useState({});

  // const fetchMovieData = async () => {
  //   const response = await axios.get(fetchUrl);
  //   console.log('response', response);
  //   setMovies(response.data.results);
  // };

  const fetchMovieData = useCallback(async () => {
    // axios.get('https://api.themoviedb.org/3/trending/all/week')
    // axios.get(`https://api.themoviedb.org/3/${requests.fetchTrending}`)
    const response = await axios.get(fetchUrl);
    // console.log('response', response);
    setMovies(response.data.results);
  }, [fetchUrl]);

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelection(movie);
  };

  return (
    <Container>
      <h2>{title}</h2>
      {/* <div className='slider'>
        <div className='slider__arrow-left'>
          <span
            className='arrow'
            onClick={() => {
              document.getElementById(id).scrollLeft -= window.innerWidth - 80;
            }}
          >
            {'<'}
          </span>
        </div>
        <div id={id} className='row__posters'>
          {movies.map((movie) => (
            <img
              key={movie.id}
              className='row__poster'
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.name}
              onClick={() => handleClick(movie)}
            />
          ))}
        </div>
        <div className='slider__arrow-right'>
          <span
            className='arrow'
            onClick={() => {
              document.getElementById(id).scrollLeft += window.innerWidth - 80;
            }}
          >
            {'>'}
          </span>
        </div>
      </div> */}
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        navigation
        pagination={{ clickable: true }}
      >
        <Content id={id}>
          {movies.map((movie) => (
            <Wrap>
              <SwiperSlide>
                <img
                  key={movie.id}
                  className='row__poster'
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt={movie.name}
                  onClick={() => handleClick(movie)}
                />
              </SwiperSlide>
            </Wrap>
          ))}
        </Content>
      </Swiper>

      {modalOpen && (
        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
      )}
    </Container>
  );
};

export default Row;

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div``;

const Wrap = styled.div``;
