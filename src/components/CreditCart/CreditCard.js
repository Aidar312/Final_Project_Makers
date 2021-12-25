import React, { useState } from "react";
import { Modal, Button } from "antd";
import Card from "react-credit-cards";
import "./CreditCard.css";

import SupportedCards from "./Cards.js";

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData,
} from "./utils";

import "react-credit-cards/es/styles-compiled.css";

// const handleClick = () => {
//   return setClickCheckModal(true)
// };
// const handleExit = () => {
//   return setClickCheckModal(false)
// };

const CreditCard = () => {
  const [card, setCard] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focused: "",
    isModalVisible: false,
  });

  const showModal = (isModalVisible) => {
    setCard({ ...card, isModalVisible });
  };

  const handleInputFocus = (e) => {
    setCard({ ...card, focus: e.target.name });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCard({ ...card, [name]: value });
  };

  return (
    <div id="PaymentForm">
      <Card
        cvc={card.cvc}
        expiry={card.expiry}
        focused={card.focus}
        name={card.name}
        number={card.number}
      />
      <form>
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="tel"
          name="cvc"
          placeholder="CVC"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <Button
          className="button form-actions"
          type="primary"
          onClick={() => showModal(true)}
        >
          Open Modal
        </Button>
        {card.isModalVisible ? (
          <Modal
            title="Basic Modal"
            visible={card.isModalVisible}
            onOk={() => showModal(false), () => alert("Платеж успешно совершен!"), !showModal}
            onCancel={() => showModal(false)}
          >
            <input type="text" placeholder="Имя" />
            <input type="text" placeholder="Фамилия" />
            <input type="number" placeholder="Номер телефона" />
            <input type="text" placeholder="Страна" />
            <input type="text" placeholder="Адрес" />
            <input type="text" placeholder="Почтовый индекс" />
          </Modal>
        ) : null}
        ...
      </form>
    </div>
  );
};

export default CreditCard;
