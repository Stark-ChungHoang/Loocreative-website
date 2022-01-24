import React from "react";
import { useTranslation } from "react-i18next";
import "./style.scss";
const Contact = () => {

  const { t } = useTranslation();

  return <div className="contact">
    <div className="contact-content">

      <header>
        <h1>
          Contact us
        </h1>
      </header>
      <div className="box-map">
        <div className="map-child">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.6611743669755!2d127.0209823151663!3d37.51590877980742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3e9253866e9%3A0xc7c3669311c4500c!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDrhbztmITrj5kg64-E7IKw64yA66GcOOq4uCAxNy0xMCAxRg!5e0!3m2!1sko!2skr!4v1574831755695!5m2!1sko!2skr" style={{
            border: 0
          }} loading="lazy" title="co cái nịt"></iframe>
        </div>
        <div className="map-child info-wrapper">
          <div className="info">
            <div className="top">
              <p>{t("contact.address")}</p>
              <p>{t("contact.district")}</p>
              <p>T 02 543 4983</p>
            </div>
            <div className="bottom">
              <div className="title">Work With Us.</div>
              <a href="mailto:loocreative@playlooc.com" target="/" >loocreative@playlooc.com</a>
              <div className="hidden"></div>
              <div className="title">Careers.</div>
              <a href="mailto:loocreative@playlooc.com" target="/" >loocreative@playlooc.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Contact;
