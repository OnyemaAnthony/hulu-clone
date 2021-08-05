import React from 'react';
import '../css/VideoCard.css';
import {ThumbUp} from "@material-ui/icons";


const base_url = 'https://image.tmdb.org/t/p/original';
const VideoCard = ({movie}) => {

    return (
        <div className='videoCard'>
            <img src={`${base_url}${movie.backdrop_path || movie.poster}`} alt=""/>
            <p>{movie.overview}</p>
            <h2>{movie.title}</h2>
            <p className='videoCard_stats'>
                {movie.video && `${movie.video} .`}
                {`${movie.release_date}.`}
                <ThumbUp/>{" "}
                {movie.vote_count}
            </p>

        </div>
    );
};

export default VideoCard;