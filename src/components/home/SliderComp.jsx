import React from 'react'
import Slider from "react-slick"

const SliderComp = () => {

  const settings = {
    //dots: true,
    infinite: true,
    autoplay: true, // autoplay özelliği slidenin kendi kendine oynamasını sağlar
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div >
      <Slider {...settings}>
        <div className='!flex items-center justify-center bg-gray-100 px-9' >
          <div  >
              <div className='text-6xl font-bold'>Sezon Sonu Ürünler</div>
              <div className='text-lg my-4' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis excepturi laborum praesentium quo tempora facilis voluptate numquam natus rerum molestiae! Ut dolore recusandae exercitationem perferendis, aut sint nisi explicabo vel. </div>
              <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-14 flex items-center justify-center bg-gray-200 hover:bg-gray-300 hover:scale-105  duration-300' >İncele</div>
          </div>
            <img src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9d43eaf2-4aca-4be2-9b5b-0033d8508d54/court-vision-low-ayakkab%C4%B1s%C4%B1-2jDTs7.png' alt='Nike' ></img> 
        </div>
        <div className='!flex items-center justify-center bg-gray-100 px-9' >
          <div > 
                <div className='text-6xl font-bold'>Sezon Sonu Ürünler</div>
                <div className='text-lg my-4' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis excepturi laborum praesentium quo tempora facilis voluptate numquam natus rerum molestiae! Ut dolore recusandae exercitationem perferendis, aut sint nisi explicabo vel. </div>
                <div className='border rounded-full cursor-pointer text-2xl w-[200px] px-[1px] h-16 flex items-center justify-center bg-gray-200 hover:bg-gray-300 hover:scale-105  duration-300' >İncele</div>
            </div>
        <img src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9c873d33-58ff-4a69-a28c-9deabb3631eb/blazer-mid-pro-club-ayakkab%C4%B1s%C4%B1-gBxRTL.png' alt='Nike'></img> 
        </div>
      </Slider>
  </div>
  )
}

export default SliderComp
