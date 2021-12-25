import React from "react";
import "./Home.css";
import { Card, Carousel } from "antd";
import photo from "./img/slide_1.jpg";
import photo1 from "./img/slide2.jpg";
import photo2 from "./img/slide3.jpg";
import photo3 from "./img/slide4.jpg"

const contentStyle = {
  textAlign: 'center',
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  background: '#364d79',
};

const { Meta } = Card;
const Home = () => {
  return (
    <div>
      <div className="container">
        <Carousel autoplay>
          <div className="img-carousel">
            <img style={contentStyle} src={photo} alt="photo_1" />
          </div>
          <div className="img-carousel">
            <img style={contentStyle} src={photo1} alt="photo_2" />
          </div>
          <div className="img-carousel">
            <img style={contentStyle} src={photo2} alt="photo_3" />
          </div>
          <div className="img-carousel">
            <img style={contentStyle} src={photo3} alt="photo_4" />
          </div>
        </Carousel>
      </div>

      <div className="wildberries">
        <h2><marquee style={{ color: "white" }}>Wildberries от всей души поздравляет Вас с наступающим новым 2022 годом! 
        </marquee>
        </h2>
      </div>
      <div className="Shop">
        <a
          style={{ display: "flex", justifyContent: "center", color: "#cb11ab", height: '30px' }}
        >
          Возможно, Вам понравится
        </a>
      </div>
      <div className="cards">
        <Card
          hoverable
          style={{ width: 320 }}
          cover={
            <img
              alt="example"
              src="https://images.wbstatic.net/big/new/13760000/13769057-1.jpg"
            />
          }
        >
          <Meta title="Wildberries" description="Шуба женская норковая" />
        </Card>
        <Card
          hoverable
          style={{ width: 320 }}
          cover={
            <img
              alt="example"
              src="https://images.wbstatic.net/big/new/13950000/13955729-1.jpg"
            />
          }
        >
          <Meta title="Wildberries" description="Худи для беременных" />
        </Card>
        <Card
          hoverable
          style={{ width: 320 }}
          cover={
            <img
              alt="example"
              src="https://images.wbstatic.net/big/new/50850000/50854021-1.jpg"
            />
          }
        >
          <Meta title="Wildberries" description="Лонгслив женский хлопок" />
        </Card>
        <Card
          hoverable
          style={{ width: 320 }}
          cover={
            <img
              alt="example"
              src="https://images.wbstatic.net/big/new/18930000/18930167-1.jpg"
            />
          }
        >
          <Meta title="Wildberries" description="Женское вечернее нарядное праздничное платье" />
        </Card>
      </div>
    </div>
  );
};

export default Home;
