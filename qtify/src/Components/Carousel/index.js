import Card from '../Card';
import { Virtual, Pagination, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Carousel.css'
//import { ReactComponent as RightIcon} from '../Section/rightNav.svg';
//import { ReactComponent as LeftIcon} from '../Section/leftNav.svg';

const Carousel = ({navId, data}) => {
return (
    <div className='carousel-container'>
    <Swiper
        modules={[Virtual, Navigation, Pagination]}
       // onSwiper={setSwiperRef}
        slidesPerView={8}
        //centeredSlides={true}
        spaceBetween={30}
       // pagination={{
        //  type: 'fraction',
        //}}
       // navigation={true}
       navigation={{ nextEl:`.arrow-right-${navId}`, prevEl: `.arrow-left-${navId}` }}
        virtual
      >
        {data.map(cardData => <SwiperSlide key={cardData.id}><Card

imgSrc={cardData.image}
label={cardData.title}
followersCount={cardData.follows}
numOfSongs={cardData.songs?cardData.songs.length:""}
/></SwiperSlide>)}  
      </Swiper>
<div className={`arrow-left-${navId} arrow-left arrow`}><img src='/leftIcon.png'/></div>
<div className={`arrow-right-${navId} arrow-right arrow`}><img src='/rightIcon.png'/></div>
  </div>

)


}
export default Carousel;