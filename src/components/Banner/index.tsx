import { bannerElements } from '../../constants';
import { BannerButtons } from '../../types';
import React from 'react';
import './index.scss';

const Banner = () => {
  return (
    <div className={"BannerWrapper"}>
      <div className={"TopBar"}>
        <div className={"DeveloperName"}>Nicholas Ashley</div>
        <p className={"Title"}>Software Engineer</p>
        <p className={"Description"}> 
          North Carolina based engineer who loves playing video games, working out and coding. 
        </p>
        <div className={"Animation"}></div>
        {/* <div className={"ParentOfBannerElements"}>
          {bannerElements.map((element: BannerButtons) => (
            <div key={element.id}>{element.title}</div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
