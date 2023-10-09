import * as React from 'react';
import { bannerElements } from '../../constants';
import { BannerButtons } from '../../types';
import './index.scss';


const Banner = () => {
  return (
    <div className={"BannerWrapper"}>
      <div className={"TopBar"}>
        <div className={"ParentOfBannerElements"}>
          {bannerElements.map((element: BannerButtons) => (
            <div key={element.id}>{element.title}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
