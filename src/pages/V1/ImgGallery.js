import React from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import p1 from '../../images/7.jpg';
import p2 from '../../images/8.jpg';
import p3 from '../../images/2.jpg';
import p4 from '../../images/20.jpg';
import p5 from '../../images/5.jpg';

import s1 from '../../images/7.jpg';
import s2 from '../../images/8.jpg';
import s3 from '../../images/2.jpg';
import s4 from '../../images/20.jpg';
import s5 from '../../images/5.jpg';

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
  ];

  
  return (
    <div className='bc-pink container' data-aos="fade-up">
      <ImageGallery items={images} />
    </div>
  )
}

export default ImgGallery