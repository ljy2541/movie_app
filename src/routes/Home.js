import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import { Swiper, SwiperSlide } from 'swiper/react';

import "./Home.css";
import 'swiper/swiper.scss';

class Home extends React.Component{
  state = {
    isLoading : true,
    movies : []
  };
  getMovies = async () => {
    const{
      data: {
        data: {movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating?genre=action");
    this.setState({ movies, isLoading: false });
  }

  componentDidMount(){    
    this.getMovies();
  }
  render(){    
    const { isLoading, movies } = this.state;
    return ( 
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            <h1>Action</h1>
            <Swiper
              spaceBetween={10}
              slidesPerView={5}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >      
            {movies.map(movie => (
              <SwiperSlide>
              <Movie
                key={movie.id} 
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
              </SwiperSlide>
            ))}
            </Swiper>
          </div>
        )}
      </section>
    )
  }
}

export default Home;
