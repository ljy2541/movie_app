import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import { Swiper, SwiperSlide } from 'swiper/react';

import Loading from "./img/loading.gif"
import "./Home.css";
import 'swiper/swiper.scss';

class Home extends React.Component{
  state = {
    isLoading : true,
    action_movies : [],
    sport_movies : [],
    comedy_movies : [],
    family_movies : []
  }; 
  getMovies = async () => {
    var{
      data: {
        data: {movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?genre=action");
    this.setState({ action_movies:movies});
    var{
      data: {
        data: {movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?genre=sport");
    this.setState({ sport_movies:movies, isLoading: false });
    var{
      data: {
        data: {movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?genre=comedy");
    this.setState({ comedy_movies:movies, isLoading: false });
    var{
      data: {
        data: {movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?genre=family");
    this.setState({ family_movies:movies, isLoading: false });
    
  }

  componentDidMount(){    
    this.getMovies();
  }
  render(){    
    const { isLoading, action_movies, sport_movies, comedy_movies, family_movies } = this.state;
    return ( 
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text"><img src={Loading} alt="Loading..."></img></span>
          </div>
        ) : (
          <div className="movies">
            <h1>액션</h1>
            <Swiper
              spaceBetween={10}
              slidesPerView={8}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >      
            {action_movies.map(movie => (
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

            <h1>스포츠</h1>
            <Swiper
              spaceBetween={10}
              slidesPerView={8}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            > 
              {sport_movies.map(sport => (
                <SwiperSlide>
                <Movie
                  key={sport.id} 
                  id={sport.id} 
                  year={sport.year} 
                  title={sport.title} 
                  summary={sport.summary} 
                  poster={sport.medium_cover_image}
                  genres={sport.genres}
                />
                </SwiperSlide>
              ))}
            </Swiper>

            <h1>코미디</h1>
            <Swiper
              spaceBetween={10}
              slidesPerView={8}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            > 
              {comedy_movies.map(comedy => (
                <SwiperSlide>
                <Movie
                  key={comedy.id} 
                  id={comedy.id} 
                  year={comedy.year} 
                  title={comedy.title} 
                  summary={comedy.summary} 
                  poster={comedy.medium_cover_image}
                  genres={comedy.genres}
                />
                </SwiperSlide>
              ))}
            </Swiper>

            <h1>가족</h1>
            <Swiper
              spaceBetween={10}
              slidesPerView={8}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            > 
              {family_movies.map(family => (
                <SwiperSlide>
                <Movie
                  key={family.id} 
                  id={family.id} 
                  year={family.year} 
                  title={family.title} 
                  summary={family.summary} 
                  poster={family.medium_cover_image}
                  genres={family.genres}
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
