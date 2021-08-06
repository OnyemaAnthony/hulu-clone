import React, {useEffect, useState} from 'react';
import '../css/Results.css'
import VideoCard from "./VideoCard";
import axios from "../axios";
import request from "../request";

const Results = ({selectedOption}) => {
    const [movies, setMovies] = useState([]);

    useEffect(async () => {
        async function fetchData() {
            const response = await axios.get(selectedOption);
            setMovies(response.data.results);
            return response;
        }

        await fetchData();
    }, [selectedOption]);
    return (
        <div className='results'>
            {
                movies.map(movie => (
                    <VideoCard key={movie.id} movie={movie}/>
                ))};

        </div>
    );
};

export default Results;