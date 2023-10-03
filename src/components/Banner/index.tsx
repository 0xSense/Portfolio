import * as React from 'react';
import './index.scss';

const Banner = () => {
  return (
    <div className={"BannerWrapper"}>
      <div className={"TopBar"}>
        <div className={"ParentOfBannerElements"}>
          <div>Nicholas Ashley</div>
          <div>About Me</div>
          <div>Resume</div>
          <div>Projects</div>
          <div>skills</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
