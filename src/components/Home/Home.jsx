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

      {/* <div className="wildberries">
        <div class="disappear">
          <span>w</span> 
          <span>i</span>
           <span>l</span>
            <span>d</span> 
            <span>b</span> 
            <span>e</span> 
            <span>r</span>
             <span>r</span> 
             <span>i</span>
             <span>e</span> 
             <span>s</span>
        </div>

      </div> */}
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
              src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0d%2F4d%2F0d4dc066d0472b77cb9c7600943f1ab40b9c1627.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
            />
          }
        >
          <Meta title="H&M" description="New Collection" />
        </Card>
        <Card
          hoverable
          style={{ width: 320 }}
          cover={
            <img
              alt="example"
              src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fce%2Fc0%2Fcec07795aabafac578136cd8c1616858d3733974.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
            />
          }
        >
          <Meta title="H&M" description="New Collection" />
        </Card>
        <Card
          hoverable
          style={{ width: 320 }}
          cover={
            <img
              alt="example"
              src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F12%2F59%2F1259419590efeeb522ad9d6b35ad10cefcc88357.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
            />
          }
        >
          <Meta title="H&M" description="New Collection" />
        </Card>
        <Card
          hoverable
          style={{ width: 320 }}
          cover={
            <img
              alt="example"
              src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F8f%2F30%2F8f30a00ae2273e37e3e58d2b4560dffb38387469.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
            />
          }
        >
          <Meta title="H&M" description="New Collection" />
        </Card>
      </div>
    </div>
  );
};

export default Home;
