import { bannerElements } from '../../constants';
import { BannerButtons } from '../../types';
import './index.scss';

const Banner = () => {
  return (
    <div className={"BannerWrapper"}>
      <div className={"TopBar"}>
        <h1 className={"DeveloperName"}>Nicholas Ashley</h1>
        <p className={"Title"}>Software Engineer</p>
        <p className={"Description"}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam quos, vel, iste neque, libero totam doloribus voluptatem eligendi nulla earum maxime ea? Ratione nobis fuga maxime repellat quam impedit rerum!</p>
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
