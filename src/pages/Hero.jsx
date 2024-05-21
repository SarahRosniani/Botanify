import Image from 'react-bootstrap/Image';
import img from '../assets/pohon.png';
import Button from 'react-bootstrap/Button';
import Informasi from '../pages/Informasi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Underline1 from '../assets/Vector 1.png';
import Underline2 from '../assets/Vector 2.png';
import img1 from '../assets/clients/client-1.png';
import img2 from '../assets/clients/client-2.png';
import img3 from '../assets/clients/client-3.png';
import img4 from '../assets/clients/client-4.png';
import img5 from '../assets/clients/client-5.png';

const Hero = () => {
  return (
    <div>
      <section id="hero" className="hero section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1 className="">
                Pantau kesehatan tanaman anda dalam sekali potret
                <div className="underline-container">
                  <img src={Underline1} alt="underline" className="underline-img" />
                </div>
                <div className="underline-container2">
                  <img src={Underline2} alt="underline" className="underline-img2" />
                </div>
              </h1>
              <p className="">
                Dapatkan informasi tentang tanaman anda hanya dalam genggaman anda, begitu menyenangkan bukan?
              </p>
              <div className="d-flex">
                <Button className='btn-mulai'>Mulai Sekarang</Button>
                <a href="" className="glightbox btn-cara d-flex align-items-center"><i className="bi bi-play-circle"></i><p1>Cara Kerjanya</p1></a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img">
              <Image src={img} className="img-fluid animated" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* Clients Section */}
      <section id="clients" className="clients section">
        <div className="container">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={35}
            slidesPerView={5}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide><img src={img1} className="img-fluid" alt="" /></SwiperSlide>
            <SwiperSlide><img src={img2} className="img-fluid" alt="" /></SwiperSlide>
            <SwiperSlide><img src={img3} className="img-fluid" alt="" /></SwiperSlide>
            <SwiperSlide><img src={img4} className="img-fluid" alt="" /></SwiperSlide>
            <SwiperSlide><img src={img5} className="img-fluid" alt="" /></SwiperSlide>
            <SwiperSlide><img src={img1} className="img-fluid" alt="" /></SwiperSlide>
            <SwiperSlide><img src={img2} className="img-fluid" alt="" /></SwiperSlide>
            <SwiperSlide><img src={img3} className="img-fluid" alt="" /></SwiperSlide>
          </Swiper>
        </div>
      </section>
      <Informasi />
    </div>
  );
};

export default Hero;
