import React from 'react';

const ImageList=({images})=>{
  const Img=images.map((image)=>{
    return <img style={{padding:'5px'}} key={image.id} src={image.urls.regular} alt='Img'/>
  });
    return <div>{Img}</div>;
}

export default ImageList;


