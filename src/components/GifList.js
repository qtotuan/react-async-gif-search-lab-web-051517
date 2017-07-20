import React from 'react';

const GifList = ({gifs}) => {
  return(
    <ul>
      {gifs.map(function(gif) {
        return <li><img src={gif.images.original.url} /></li>
      })}
    </ul>
  )
}

export default GifList;
