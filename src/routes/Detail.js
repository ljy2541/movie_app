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
       
        if(location.state){
            return (
                <section className="background__img">
                    <div>{location.state.title}</div>
                </section>
            )
        } else{
            return null;
        }
    }
} 
export default Detail