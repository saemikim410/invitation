import React from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import p1 from '../../images/JWH_6410.jpg';
import p2 from '../../images/23.jpg';
import p3 from '../../images/JWH_6508.jpg';
import p4 from '../../images/JWH_6447.jpg';
import p5 from '../../images/JWH_6426.jpg';
import p6 from '../../images/JWH_6465.jpg';
import p7 from '../../images/JWH_6310.jpg';
import p8 from '../../images/7.jpg';
import p9 from '../../images/9.jpg';
import p10 from '../../images/5.jpg';
import p11 from '../../images/1.jpg';
import p12 from '../../images/22.jpg';


import s1 from '../../images/JWH_6410.jpg';
import s2 from '../../images/23.jpg';
import s3 from '../../images/JWH_6508.jpg';
import s4 from '../../images/JWH_6447.jpg';
import s5 from '../../images/JWH_6426.jpg';
import s6 from '../../images/JWH_6465.jpg';
import s7 from '../../images/JWH_6310.jpg';
import s8 from '../../images/7.jpg';
import s9 from '../../images/9.jpg';
import s10 from '../../images/5.jpg';
import s11 from '../../images/1.jpg';
import s12 from '../../images/22.jpg';

function ImgGallery() {

  const images = [
    {
      original: p1,
      thumbnail: s1,
    },
    {
      original: p2,
      thumbnail: s2,
    },
    {
      original: p3,
      thumbnail: s3,
    },
    {
      original: p4,
      thumbnail: s4,
    },
    {
      original: p5,
      thumbnail: s5,
    },
    {
      original: p6,
      thumbnail: s6,
    },
    {
      original: p7,
      thumbnail: s7,
    },
    {
      original: p8,
      thumbnail: s8,
    },
    {
      original: p9,
      thumbnail: s9,
    },
    {
      original: p10,
      thumbnail: s10,
    },
    {
      original: p11,
      thumbnail: s11,
    },
    {
      original: p12,
      thumbnail: s12,
    },
  ];

  
  return (
    <div className='bc-pink container' data-aos="fade-up">
      <ImageGallery items={images} />
    </div>
  )
}

export default ImgGallery