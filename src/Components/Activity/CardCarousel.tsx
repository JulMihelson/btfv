import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import post_1 from "./post_1";
import post_2 from "./post_2";
import post_3 from "./post_3";
import post_4 from "./post_4";
import post_5 from "./post_5";
import SocialMediaIcons from "../SocialMedia/SocialMediaBlock";
import css from "./CardCarousel.module.css";

interface IPost {
  text: string;
  date: string;
  images: string[];
}

interface IPosts {
  posts: IPost[];
}

const posts: IPosts = {
  posts: [
    {
      text: "Автомобіль, який певний час чекав та був у користуванні фонду, переданий нашому близькому Другу, бойовому медику 128 ОГШБр в допомогу виконання бойових задач на південному напрямку!",
      date: "5 вересня 2023",
      images: post_1,
    },
    {
      text: "BTFV виконали запит та здійснили доставку 2х евакуаційних та 1го буксировочного причепа для автомобілів нашим Захисникам на південний та східний напрями. Дякуємо нашим Парнерам:🤝компанії BRP ЦЕНТР КИЇВ за фінансування причепів, їх доукомплектацію та надання службового автомобіля для здійснення доставки🤝компанії КИЯШКО за спец.умови та виготовлення евак.причепів🤝компніі URSA за спец.умови та виготовлення буксировчного причепа.",
      date: "25 серпня 2023",
      images: post_2,
    },
    {
      text: "Київ-Приморське-Харків-Лиман-Київ - 42 години - 268 літрів палива - 1837км 3 бойових бригадиВолонтери нашого фонду-спільноти при підтримці наших Партнерів @brpcentre.kiev.ua @the_future_of_polissya @iloveukrainecharity @car_wash_point менше, ніж за дві доби здійснили доставку майна по запитах трьох бойових бригад, а також забезпечили та розповсюдили 624 кг гуманітарної продовольчої допомоги постраждалому мирному населенню від військовоі агресії рф.",
      date: "19 серпня 2023",
      images: post_3,
    },
    {
      text: "Спільно з Майбутнє Полісся виконали доставку чергового автомобіля захисникам на східний напрямок, а також доставили 100 продуктових наборів ВПО.",
      date: "27 липня 2023",
      images: post_4,
    },
    {
      text: "Наші перші два спільних гуманітарних проекти. 220 продуктових наборів доставлено та розповсюджено серед ВПО у Харківській та Донецькій обл. Проект реалізований за підтримки @the_future_of_polissya та @iloveukrainecharity. Разом з нашими Партнери @militarypostua @off_road_volunteers @levabalatskaya @krasn.anastasiia розповсюдили допомогу на місцях.",
      date: "7 серпня 2023",
      images: post_5,
    },
  ],
};

const CardCarousel: React.FC = () => {
  // const settingsMain = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   arrows: false,
  // };
  // const settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   arrows: false,
  //   useCSS: true,
  // };
  const mainSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
  };

  const photoSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  return (
    <div className={css.cardLine}>
      <Slider {...mainSliderSettings}>
        {posts.posts.map((post: IPost, index: number) => (
          <div key={index} className={css.cardBlock}>
            <Slider {...photoSliderSettings}>
              {post.images.map((image, imageIndex) => (
                <div key={imageIndex}>
                  <img
                    className={css.carouselImage}
                    src={image}
                    alt="Діяльність фонду BTFV"
                    width={300}
                    height={200}
                  />
                </div>
              ))}
            </Slider>
            <div className={css.contentContainer}>
              <div className={css.postDate}>{post.date}</div>
              <div className={css.postText}>{post.text}</div>
              <div className={css.line}></div>
              <div className={css.mediaText}>
                Більше новин: <SocialMediaIcons />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
  // <div className={css.cardContainerGlobal}>
  //   <div className={css.try}>
  //     <Carousel autoplay>
  //       <div className={css.cardLine}>
  //         {posts.posts.map((post: IPost, index: number) => {
  //           const { text, date, images } = post;

  //           return (
  //             <div className={css.cardBlock} key={index}>
  //               <Carousel autoplay>
  //                 {images.map((image, imageIndex) => (
  //                   <div key={imageIndex}>
  //                     <img
  //                       className={css.carouselImage}
  //                       src={image}
  //                       alt="Діяльність фонду BTFV"
  //                       width={300}
  //                       height={200}
  //                     />
  //                   </div>
  //                 ))}
  //               </Carousel>
  //               <div className={css.contentContainer}>
  //                 <div className={css.postDate}>{date}</div>
  //                 <div className={css.postText}>{text}</div>
  //                 <div className={css.line}></div>
  //                 <div className={css.mediaText}>
  //                   Більше новин: <SocialMediaIcons />
  //                 </div>
  //               </div>
  //             </div>
  //           );
  //         })}
  //       </div>
  //     </Carousel>
  //   </div>
  // </div>
};

export default CardCarousel;
