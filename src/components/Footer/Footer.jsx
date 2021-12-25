import React from "react";
import "./Footer.css";

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
          <h3>КУПИТЬ</h3>
          <a style={{ color: "black" }}>Женщины</a>
          <a style={{ color: "black" }}>Мужчины</a>
          <a style={{ color: "black" }}>Малыши</a>
          <a style={{ color: "black" }}>Дети</a>
          <a style={{ color: "black" }}>H&M HOME</a>

        </div>

        <div className="foot">
          <h3>ИНФОРМАЦИЯ О КОМПАНИИ</h3>
          <a target="_blank" href="https://career.hm.com/content/hmcareer/ru_ru.html" style={{ color: "black" }}>Карьера в H&M</a>
          <a target="_blank" href="https://hmgroup.com/about-us/" style={{ color: "black" }}>О группе компании H&M</a>
          <a target="_blank" href="https://hmgroup.com/sustainability/" style={{ color: "black" }}>Экологическая и  </a>
          <a target="_blank" href="https://hmgroup.com/sustainability/" style={{ color: "black" }}>социальная ответственность </a>
          <a target="_blank" href="https://about.hm.com/news.html" style={{ color: "black" }}>Пресса</a>
          <a target="_blank" href="https://hmgroup.com/investors/" style={{ color: "black" }}>Для инвесторов</a>
          <a target="_blank" href="https://hmgroup.com/about-us/corporate-governance/" style={{ color: "black" }}>Корпоративная ответственность</a>

        </div>

        <div className="foot">
          <h3>ПОМОЩЬ</h3>
          <a target="_blank" href="https://www2.hm.com/ru_ru/customer-service.html" style={{ color: "black" }}>Служба поддержки</a>
          <a target="_blank" href="" style={{ color: "black" }}>Мой акаунт</a>
          <a target="_blank" href="https://www2.hm.com/ru_ru/customer-service/shopping-at-hm/store-locator" style={{ color: "black" }}>Найти магазины</a>
          <a target="_blank" href="https://www2.hm.com/ru_ru/customer-service/legal-and-privacy/privacy-link.html" style={{ color: "black" }}>Юридическая информация и </a>
          <a target="_blank" href="https://www2.hm.com/ru_ru/customer-service/legal-and-privacy/privacy-link.html" style={{ color: "black" }}>политика конфиденциальности</a>
          <a target="_blank" href="https://www2.hm.com/ru_ru/customer-service/contact.html" style={{ color: "black" }}>Контакты</a>
          <a target="_blank" href="https://www2.hm.com/ru_ru/zhenshchiny.html" style={{ color: "black" }}>Настройки куки-файлов</a>
        </div>

        <div className="foot">
          <h3>Стать участником</h3>
          <a target="_blank" href="https://www2.hm.com/ru_ru/member/info.html" style={{ color: "black" }}>Станьте участником нашей программы лоаяльности</a>
          <a target="_blank" href="https://www2.hm.com/ru_ru/member/info.html" style={{ color: "black" }}>сейчас и получите скидку в 10% </a>
          <a target="_blank" href="https://www2.hm.com/ru_ru/member/info.html" style={{ color: "black" }}>на вашу следующую покупку онлайн</a>
          <a target="_blank" href="https://www2.hm.com/ru_ru/member/info.html" style={{ color: "black" }}>ПРОЧИТАТЬ ПОДРОБНЕЕ</a>
        </div>


      </div>
      <div className="img2">
        <a>
          <img
            src="https://i.pinimg.com/originals/fb/5a/bd/fb5abd833d11668f26f0ece919b45f63.jpg"
            alt=""
          />
        </a>
      </div>

    </div>

  );
};

export default Footer;
