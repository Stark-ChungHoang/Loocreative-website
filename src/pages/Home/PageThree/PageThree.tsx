import './pageThree.scss';
import { useTranslation } from 'react-i18next';
function PageThree() {
    const { t } = useTranslation();
    return (
        <div className="page-three">
            <div className="page-three-container">
                <div className="page-three-content">
                    <div className="item">
                        <div className="item-content">
                            <p className="title title_first">Motion</p>
                            <p className="desc">
                                {t("home.thirdPage.motion.text")}
                            </p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-content">
                            <p className="title title_second">Design</p>
                            <p className="desc">
                                {t("home.thirdPage.design.text")}
                            </p>
                        </div>
                    </div><div className="item">
                        <div className="item-content">
                            <p className="title title_third">Develop</p>
                            <p className="desc">
                                {t("home.thirdPage.develop.text")}

                            </p>
                        </div>
                    </div><div className="item">
                        <div className="item-content">
                            <p className="title title_fourth">Culture</p>
                            <p className="desc">
                                {t("home.thirdPage.culture.text")}

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageThree;
