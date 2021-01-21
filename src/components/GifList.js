import React from "react";

const GifList = props =>
{
  return(
          <div className="oneGif">
            {props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="It should be a gif ;p"/>)}
          </div>
        )
}
export default GifList;
