import React, { useEffect, useState } from "react";
import axios from "../../api/axios.js";
import "../../assets/css/payCard.css";
import "../../assets/css/popup.css";
import close_window from "../../assets/img/close-window.png";
import card from "../../assets/img/default_card.png";
import plus from "../../assets/img/plus_white.png";
import formatCardNumber from "../../util/FunctionUtil.js";
import InsertPayment from "./InsertPayment";

function SelectPayment({ period, onClose }) {
  const [payment, setPayment] = useState([]);
  const [showInsertPayment, setShowInsertPayment] = useState(false);

  useEffect(() => {
    fetchPayments();
  }, []);

  function handlePaymentAdded() {
    fetchPayments(); 
  }

  const fetchPayments = () => {
    axios.get(`/main/paymentAllByMember`, { withCredentials: true })
      .then((res) => {
        setPayment(res); 
      }) 
      .catch((err) => {
        console.log(err);
      });
  };

  function subscription(period, payNum){
    console.log(period, payNum);
  }

  function addPayCard(){
    setShowInsertPayment(true);
  }

  if (showInsertPayment) {
    return <InsertPayment onClose={() => setShowInsertPayment(false)} onPaymentAdded={handlePaymentAdded}/>;
  }

  return (
    <div className="popup_container" onClick={onClose}>
      <div className="popup_main_long" onClick={(e) => e.stopPropagation()}>
        <div className="close_popup" onClick={onClose}>
          <img src={close_window} alt="" className="close_img" />
        </div>
        <div className="popup_body_long">
          <div className="popup_body_header">결제 정보</div>
          <hr />
          <div className="payCard-box">
            {payment.length > 0 ? (
              payment.map((payCard) => (
                <React.Fragment key={payCard.payNum}>
                  <div className="payCard-container" onClick={() => subscription(period, payCard.payNum)}>
                    <img src={card} alt="" className="payCard-image" />
                    <div className="payCard-text">
                      {formatCardNumber(payCard.payCard)}{" "}
                    </div>
                  </div>
                  <hr />
                </React.Fragment>
              ))
            ) : (
              <></>
            )}
            <div className="payCard-container payCard-blurred" onClick={addPayCard}>
              <img src={card} alt="" className="payCard-image" />
              <div className="payCard-plus">
                <img src={plus} alt=""/>
                카드 추가
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectPayment;
