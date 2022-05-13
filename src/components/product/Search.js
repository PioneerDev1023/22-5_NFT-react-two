import React from "react";
import {Image, Col} from "react-bootstrap";
import Search_img from '../../assets/image/icon/search.png';


const SearchPage = () => {
  return (
    <Col md={6} className="search-row mb-4">
      <div className="search-box input-group md-form form-sm form-1 pl-0">
        <div className="input-group-prepend">
          <span className="input-group-text purple lighten-3 search-image" id="basic-text1">
            <Image className="search-img" src={Search_img} />
          </span>
        </div>
        <input
          className="form-control my-0 py-1 search-form"
          type="text"
          placeholder="SEARCH ITEMS..."
          aria-label="Search"
        />
      </div>
    </Col>
  );
};

export default SearchPage;