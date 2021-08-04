import React from "react";
import "./Detail.css";

class Detail extends React.Component{
    componentDidMount(){
        console.log(this.props);
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push("/");
        }
    }

    
    render(){
        const {location} = this.props;
        const backgroundUrl = location.state.background_image;
        const backgroundImages = `url(${backgroundUrl})`;
       
        if(location.state){
            return (
                <section className="background__img" style={{ backgroundImage: backgroundImages }} >
                    <div className="content">
                        <div className="poster"><img src={location.state.poster}></img></div>
                        <div className="titles">
                            <h2 className="title">{location.state.title}</h2>
                            <div className="year">{location.state.year}</div>
                        </div>
                        <ul className="genres">
                            {location.state.genres.map((genre, index) => (
                            <li key={index} className="genres__genre">
                                {genre}
                            </li>
                            ))}
                        </ul>                        
                        <div className="summary">{location.state.summary}</div>
                    </div>
                </section>
            )
        } else{
            return null;
        }
    }
} 
export default Detail