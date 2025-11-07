import React from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import p1 from '../../images/CN1_0788.jpg';
import p2 from '../../images/CN1_0811.jpg';
import p3 from '../../images/CN2_9752.jpg';
import p4 from '../../images/CN2_9874.jpg';
import p5 from '../../images/CN1_1066.jpg';
import p6 from '../../images/CN1_9360.jpg';
import p7 from '../../images/CN1_9543.jpg';
import p8 from '../../images/CN1_0670.jpg';
import p9 from '../../images/CN1_0587.jpg';
import p10 from '../../images/CN1_0177.jpg';
import p11 from '../../images/CN1_0006.JPG';

import s1 from '../../images/CN1_0788.jpg';
import s2 from '../../images/CN1_0811.jpg';
import s3 from '../../images/CN2_9752.jpg';
import s4 from '../../images/CN2_9874.jpg';
import s5 from '../../images/CN1_1066.jpg';
import s6 from '../../images/CN1_9360.jpg';
import s7 from '../../images/CN1_9543.jpg';
import s8 from '../../images/CN1_0670.jpg';
import s9 from '../../images/CN1_0587.jpg';
import s10 from '../../images/CN1_0177.jpg';
import s11 from '../../images/CN1_0006.JPG';

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
  ];

  
  return (
    <div className='bc-blue container' id="gallery_div" data-aos="fade-up">
      <ImageGallery items={images} />
    </div>
  )
}

export default ImgGallery