import React from "react";
import { Carousel } from "antd";
import css from "./CardCarousel.module.css";
import photo from "../../assets/images/activities_posts/1/Choco.jpg";
import post_1 from "./post_1";
import post_2 from "./post_2";
import post_3 from "./post_3";
import post_4 from "./post_4";
import post_5 from "./post_5";
interface IPost {
  text: string;
  date: string;
  images: string[];
}

interface IPosts {
  posts: IPost[];
}

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const posts: IPosts = {
  posts: [
    {
      text: "Автомобіль, який певний час чекав та був у користуванні фонду, переданий нашому близькому Другу, бойовому медику 128 ОГШБр в допомогу виконання бойових задач на південному напрямку!",
      date: "5 вересня 2023",
      images: post_1,
    },
    {
      text: "Автомобіль, який певний час чекав та був у користуванні фонду, переданий нашому близькому Другу, бойовому медику 128 ОГШБр в допомогу виконання бойових задач на південному напрямку!",
      date: "25 серпня 2023",
      images: post_2,
    },
    {
      text: "Автомобіль, який певний час чекав та був у користуванні фонду, переданий нашому близькому Другу, бойовому медику 128 ОГШБр в допомогу виконання бойових задач на південному напрямку!",
      date: "19 серпня 2023",
      images: post_3,
    },
    {
      text: "Автомобіль, який певний час чекав та був у користуванні фонду, переданий нашому близькому Другу, бойовому медику 128 ОГШБр в допомогу виконання бойових задач на південному напрямку!",
      date: "27 липня 2023",
      images: post_4,
    },
    {
      text: "Автомобіль, який певний час чекав та був у користуванні фонду, переданий нашому близькому Другу, бойовому медику 128 ОГШБр в допомогу виконання бойових задач на південному напрямку!",
      date: "7 серпня 2023",
      images: post_5,
    },
  ],
};

const CardCarousel: React.FC = () => {
  return (
    <div>
      {posts.posts.map((post: IPost, index) => (
        <div key={index}>
          <Carousel autoplay>
            {post.images.map((image, imageIndex) => (
              <div key={imageIndex}>
                <img src={image} alt="#" width={250} />
              </div>
            ))}
          </Carousel>

          <div className={css.postDate}>{post.date}</div>
          <div className={css.postText}>{post.text}</div>
        </div>
      ))}
    </div>
  );
};

export default CardCarousel;
