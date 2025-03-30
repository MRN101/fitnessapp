import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './Homebanner2.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// Import required modules
import { Pagination } from 'swiper/modules';

const Homebanner2 = () => {
  const [Workouts, setWorkouts] = React.useState<any[] | null>(null);

  const getWorkouts = async () => {
    let data: any = [
      {
        type: 'Chest',
        imageUrl: 'https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?w=600&auto=format&fit=crop&q=60',
        durationInMin: 30
      },
      {
        type: 'Abs',
        imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop&q=60',
        durationInMin: 90
      },
      {
        type: 'Shoulder',
        imageUrl: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?w=600&auto=format&fit=crop&q=60',
        durationInMin: 40
      },
      {
        type: 'Bicep',
        imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&auto=format&fit=crop&q=60',
        durationInMin: 40
      },
      {
        type: 'Tricep',
        imageUrl: 'https://images.unsplash.com/photo-1530822847156-5df684ec5ee1?w=600&auto=format&fit=crop&q=60',
        durationInMin: 40
      },
      {
        type: 'Legs',
        imageUrl: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d?w=600&auto=format&fit=crop&q=60',
        durationInMin: 50
      },

      {
        type: 'Cardio',
        imageUrl: 'https://images.unsplash.com/flagged/photo-1556746834-1cb5b8fabd54?w=600&auto=format&fit=crop&q=60',
        durationInMin: 60
      },
      {
        type: 'Forearms',
        imageUrl: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&auto=format&fit=crop&q=60',
        durationInMin: 30
      }
    ];
    setWorkouts(data);
  };

  React.useEffect(() => {
    getWorkouts();
  }, []);

  return (
    <div>
      <h1 className="mainhead1">Workouts</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 4, spaceBetween: 40 },
          1024: { slidesPerView: 5, spaceBetween: 50 },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {Workouts &&
          Workouts.map((item, index) => (
            <SwiperSlide key={index}>
  <div
    className="swiper-slide"
    style={{
      backgroundImage: `url(${item.imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
    onClick={() => {
      window.location.href = `/workout/${item.type}`
    }}
  >
    <div className='swiper-slide-content'>
      <h2>{item.type}</h2>
      <p>{item.durationInMin} min</p>
    </div>
  </div>
</SwiperSlide>

          ))}
      </Swiper>
    </div>
  );
};

export default Homebanner2;
