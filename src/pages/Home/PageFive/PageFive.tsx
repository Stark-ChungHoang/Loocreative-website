import React from "react";
import { useTranslation } from "react-i18next";
import "./pageFive.scss";
function PageFive() {
  const { t, i18n } = useTranslation();

  return <div className="page-five">{t("navbar.address")}</div>;
}

export default PageFive;
