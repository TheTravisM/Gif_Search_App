import React from "react";
import "../scss/catLoader.scss";

const CatLoader = () => (
  <div class="loading-box">
    <h1 className="loading">Loading...</h1>

  <div class="cat-box">
    <div class="cat">
      <div class="helf-box helf-box--ass">
        <div class="helf-box clip">
          <div class="cat__body"></div>
        </div>
        <div class="cat__ass">
          <div class="cat__body--fake"></div>
          <div class="cat__foots"></div>
          <div class="cat__tail"></div>
        </div>
      </div>
      <div class="helf-box helf-box--head">
        <div class="cat__head">
          <div class="cat__face">
            <div class="cat__ears"></div>
            <div class="cat__eyes"></div>
            <div class="cat__mouth"></div>
            <div class="cat__mustache"></div>
          </div>
          <div class="cat__foots"></div>
        </div>
        <div class="helf-box clip">
          <div class="cat__body"></div>
        </div>
      </div>
    </div>
  </div>
  </div>
);

export default CatLoader;
