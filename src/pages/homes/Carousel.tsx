import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Carousel() {
    return (
        <MDBCarousel showControls showIndicators>
          <MDBCarouselItem
            className='w-100 d-block'
            itemId={1}
            src='../carousel/321web.png'
            alt='...'
          />
          <MDBCarouselItem
            className='w-100 d-block'
            itemId={2}
            src='../carousel/bst-2023-am.jpg'
            alt='...'
          />
          <MDBCarouselItem
            className='w-100 d-block'
            itemId={3}
            src='../carousel/freeship-tháng-10.jpg'
            alt='...'
          />
        
        </MDBCarousel>
      );
}
