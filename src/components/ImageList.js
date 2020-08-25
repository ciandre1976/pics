import React from 'react';

const ImageList=({images})=>{
  const Img=images.map((image)=>{
    return <img style={{padding:'5px'}} 
    key={image.id}
    src={image.urls.regular} alt={image.description}/>
  });
    return <div>{Img}</div>;
}

export default ImageList;


