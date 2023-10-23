import React from "react";
import { Carousel } from "antd";
import css from "./CardCarousel.module.css";

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
      images: [
        "@images/activities_posts/1/photo_1.jpg",
        "@images/activities_posts/1/photo_2.jpg",
        "@images/activities_posts/1/photo_3.jpg",
        "@images/activities_posts/1/photo_4.jpg",
        "@images/activities_posts/1/photo_5.jpg",
      ],
    },
    // {
    //   text: "Автомобіль, який певний час чекав та був у користуванні фонду, переданий нашому близькому Другу, бойовому медику 128 ОГШБр в допомогу виконання бойових задач на південному напрямку!",
    //   date: "25 серпня 2023",
    //   images: [
    //     "@images/activities_posts/2/photo_1.jpg",
    //     "@images/activities_posts/2/photo_2.jpg",
    //     "@images/activities_posts/2/photo_3.jpg",
    //     "@/images/activities_posts/2/photo_4.jpg",
    //     "@images/activities_posts/2/photo_5.jpg",
    //   ],
    // },
    // {
    //   text: "Автомобіль, який певний час чекав та був у користуванні фонду, переданий нашому близькому Другу, бойовому медику 128 ОГШБр в допомогу виконання бойових задач на південному напрямку!",
    //   date: "19 серпня 2023",
    //   images: [
    //     "@images/activities_posts/3/photo_1.jpg",
    //     "@images/activities_posts/3/photo_2.jpg",
    //     "@images/activities_posts/3/photo_3.jpg",
    //     "@images/activities_posts/3/photo_4.jpg",
    //     "@images/activities_posts/3/photo_5.jpg",
    //   ],
    // },
    // {
    //   text: "Автомобіль, який певний час чекав та був у користуванні фонду, переданий нашому близькому Другу, бойовому медику 128 ОГШБр в допомогу виконання бойових задач на південному напрямку!",
    //   date: "7 серпня 2023",
    //   images: [
    //     "@images/activities_posts/5/photo_1.jpg",
    //     "@images/activities_posts/5/photo_2.jpg",
    //     "@images/activities_posts/5/photo_3.jpg",
    //     "@images/activities_posts/5/photo_4.jpg",
    //     "@images/activities_posts/5/photo_5.jpg",
    //   ],
    // },
    // {
    //   text: "Автомобіль, який певний час чекав та був у користуванні фонду, переданий нашому близькому Другу, бойовому медику 128 ОГШБр в допомогу виконання бойових задач на південному напрямку!",
    //   date: "27 липня 2023",
    //   images: [
    //     "@images/activities_posts/4/photo_1.jpg",
    //     "@images/activities_posts/4/photo_2.jpg",
    //     "@images/activities_posts/4/photo_3.jpg",
    //   ],
    // },
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
