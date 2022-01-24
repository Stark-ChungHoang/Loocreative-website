import { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./pageFourth.scss";
import DataHistory from "./DataHistory.json";
​
function PageFourth() {
    const [data, setData] = useState(DataHistory);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const renderData = data.history.map(val => (
        <div className="item-history" key={val.id}>
            <div className="year">
                <p className={"year" + (val.year)}>{val.year}</p>
            </div>
            <div className="item-box">
                {
                    val.childrenYears.map(child => (
                        <div className="item-year" key={child.id}>
                            <h2>{child.title}</h2>
                            <p>{child.type}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    ))
    return (
        <div className='fourth-container'>
            <h1>History</h1>
            <div className="list-history">
                <Slider {...settings}>
                    {renderData}
                </Slider>
            </div>
​
        </div>
    );
}
​
export default PageFourth;
