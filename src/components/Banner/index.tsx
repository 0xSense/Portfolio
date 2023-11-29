import React from 'react';
import './index.scss';

const Banner = () => {
  return (
    <div className={"BannerWrapper"}>
      <div className={"TopBar"}>
        <div className={"DeveloperName"}>Nicholas Ashley</div>
        <p className={"Title"}>Software Engineer</p>
        <p className={"Description"}> 
           Software Engineer who loves playing video games, working out and coding. 
        </p>
        <div className={"Animation"}></div>
      </div>
    </div>
  );
};

export default Banner;
