import React from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import p1 from '../../images/CN1_0006.JPG';
import p2 from '../../images/CN1_0006.JPG';
import p3 from '../../images/CN1_0006.JPG';
import p4 from '../../images/CN1_0006.JPG';
import p5 from '../../images/CN1_0006.JPG';

import s1 from '../../images/CN1_0006.JPG';
import s2 from '../../images/CN1_0006.JPG';
import s3 from '../../images/CN1_0006.JPG';
import s4 from '../../images/CN1_0006.JPG';
import s5 from '../../images/CN1_0006.JPG';

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
    <div className='bc-blue container' data-aos="fade-up">
      <ImageGallery items={images} />
    </div>
  )
}

export default ImgGallery