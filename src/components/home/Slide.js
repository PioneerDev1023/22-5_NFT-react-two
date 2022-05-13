import React from "react";
import { Image } from "react-bootstrap";

import Slide_img from "../../assets/image/slide/slide.png";
import Point_img from "../../assets/image/slide/point.png";
import Product_page from "../product/Index";

function Slide() {
    return (
        <div>
            <div>
                <a href={Product_page}><Image className="slide-img" src={Slide_img} /></a>
            </div>
            <div className="point-img">
                <Image className="slide-place" src={Point_img} />
            </div>
        </div>
    );
}

export default Slide;