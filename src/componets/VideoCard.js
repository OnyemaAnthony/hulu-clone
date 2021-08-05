import React from 'react';
import '../css/VideoCard.css';

const VideoCard = ({movie}) => {
    return (
        <div className='videoCard'>
            <img src="https://images.unsplash.com/photo-1615986200762-a1ed9610d3b1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aHVsdXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
            <p>This is a file about nature</p>
            <h2>Movie title</h2>
            <p>Number of likes...</p>

        </div>
    );
};

export default VideoCard;