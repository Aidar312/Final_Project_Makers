import React from "react";
import "./Footer.css";
import {
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="first-footer">
      <div className="back">
        <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Наверх
        </a>
      </div>
      <div className="footer">
        <div className="foot">
          <h2 style={{ color: "white" }}> Покупателям</h2>
          <a style={{ color: "white" }}>Как сделать заказ</a>
          <a style={{ color: "white" }}>Способ оплаты</a>
          <a style={{ color: "white" }}>Доставка</a>
          <a style={{ color: "white" }}>Возврат товара</a>
          <a style={{ color: "white" }}>Правила продажи</a>

        </div>

        <div className="foot">
          <h2 style={{ color: "white" }}>Партнерам</h2>
          <a target="" style={{ color: "white" }}>Продавцам</a>
          <br/>
          <a target="" style={{ color: "white" }}>Наши проекты</a>
          <a target="" style={{ color: "white" }}>ЗОЖ и спорт</a>
          <a target="" style={{ color: "white" }}>Детям </a>
          <a target="" style={{ color: "white" }}>Пресса</a>
          </div>

        <div className="foot">
          <h2 style={{ color: "white" }}>Компания</h2>
          <a target="" style={{ color: "white" }}>О нас</a>
          <a target="_blank" href="" style={{ color: "white" }}>Реквезиты</a>
          <a target="" style={{ color: "white" }}>Пресс центр</a>
          <a target="" style={{ color: "white" }}>Контакты</a>
          <a target="" style={{ color: "white" }}>Bug Bounty</a>
        </div>

        <div className="foot">
          <h2 style={{ color: "white" }}>Мы в соцсетях</h2>
          <a target="" style={{ color: "white" }}>Вконтакте</a>
          <a target="" style={{ color: "white" }}>Facebook </a>
          <a target="" style={{ color: "white" }}>Одноклассники</a>
          <a target="" style={{ color: "white" }}>YouTube</a>
        </div>

      <div className="foot">
          <h2 style={{ color: "white" }}>FOLLOW US ON</h2>
          <div className="ins">
            <a>
              <InstagramOutlined />
            </a>
            <a>
              <FacebookOutlined />
            </a>
            <a>
              <YoutubeOutlined />
            </a>
            <a>
              <WhatsAppOutlined />
            </a>
          </div>
        </div>
      
      </div>
    </div>

  );
};

export default Footer;
