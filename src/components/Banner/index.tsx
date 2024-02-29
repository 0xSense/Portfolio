import React from 'react';
import './index.scss';

const Banner = () => {
  return (
    <div className={"BannerWrapper"}>
        <div className={"DeveloperName"}>Nicholas Ashley</div>
        <div className={"SectionWrapper"}>
          <div>Resume</div>
          <div>Project</div>
          <div>Skills</div>
          <div>Contact</div>
        </div>
    </div>
  );
};

export default Banner;
