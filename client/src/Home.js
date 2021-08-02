import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import Header from './Header';
import { Footer } from './Footer'; 
import './App.css';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            videos: []
        };
    }
    async componentDidMount() {
        try {
            const response = await fetch('http://localhost:4000/videos');
            const data = await response.json();
            this.setState({ videos: [...data] });
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <div className="App App-header"> 
            <Header/>
                <div className="container">
                    <div className="row">
                        {this.state.videos.map(video =>
                        <div className="col-md-4" key={video.id}>
                            <Link to={`/player/${video.id}`}>
                                
                             <div className="card">
                              <img src={`http://localhost:4000${video.poster}`} alt={video.name} className="card-img-top"  />
                               <div className="card-body">
                                <p className="card-text font-weight-bold">{video.name}</p> 
                                <p className="card-text font-italic">{video.duration}</p> 
                                <p className="card-text">{video.description}</p>
                               </div>
                              </div>

                            </Link>
                        </div>
                        )}
                    </div>
                </div> 
                <Footer />
            </div>
        )
    }
}