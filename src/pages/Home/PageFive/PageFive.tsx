import "./pageFive.scss";

function PageFive() {
  return (
    <div className="page-five">
      {/* {t("navbar.address")} */}
      <div className="fifth-container">
        <div className="fifth-title">
          <h5>
            LOOCREATIVE <br /> creative partner
          </h5>
        </div>
        <div className="fifth-wrapper">
          <div className="block-item">
            <h3 className="fifth-name">Partnership.</h3>
            <div className="email">
              <a href="mailto:loocreative@playlooc.com">
                <p  className="fifth-contact">loocreative@playlooc.com</p>
                <div className="mail-icon">
                  <p>✉</p>
                </div>
              </a>
            </div>
          </div>
          <div className="block-item">
            <h3 className="fifth-name">Recruiting.</h3>
            <div className="email">
              <a href="mailto:loocreative@playlooc.com">
                <p  className="fifth-contact">loocreative@playlooc.com</p>
                <div className="mail-icon">
                  <p>✉</p>
                </div>
              </a>
            </div>
          </div>
          <div className="block-item">
            <h3 className="fifth-name">Learn more.</h3>
            <div className="learn-more">
              <a className="fifth-contact" href="#">Learn more about us.</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageFive;
