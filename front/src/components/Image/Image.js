import React from 'react';

import './Image.css';

const image = props => (
  <>
  <div
    className="image"
    style={{
      // backgroundImage: `url('${props.imageUrl}')`,
      backgroundImage: `url('f${props.imageUrl}')`,
      backgroundSize: props.contain ? 'contain' : 'cover',
      backgroundPosition: props.left ? 'left' : 'center'
    }}
    />
      {/* <div
    className="image"
    style={{
      backgroundImage: `url('https://c4.wallpaperflare.com/wallpaper/889/553/281/gundam-00-gundam-gundam-00-exia-robot-wallpaper-preview.jpg')`,
      backgroundSize: props.contain ? 'contain' : 'cover',
      backgroundPosition: props.left ? 'left' : 'center'
    }}
  /> */}
  </>
);

export default image;
