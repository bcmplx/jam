import React from 'react';

const Category = ({children, artist}) => {
    // console.log(props.children)
    // let artist;
    //  fetch('https://api.jamendo.com/v3.0/tracks/?client_id=2fd22ce6&format=jsonpretty&artist_name='+ props.children)
    // .then(data => data.json())
    // .then(values => {
    //     console.log(values.results[0].artist_name);
    //     artist = values.results[0].artist_name;
        
    // })
    return (
        <div className="artist_info" style={{
                backgroundColor: 'blue',
                width: '50%',
                }}>
            <ul>
                <h2>{children}</h2>
                <li>Artist: { artist}</li>
                <li>Song:</li>
                <li>URL:</li>
                <li>img</li>
            </ul>
        </div>

    )
    // console.log(props.children)
    
}

export default Category