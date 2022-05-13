import React from "react";
import {Image} from "react-bootstrap";

import Filter_img from "../../assets/image/icon/Filter.png"

function Filter() {
    return (
        <div>
            <Image className="filter-img" src={Filter_img} />
        </div>
    );
}

export default Filter;