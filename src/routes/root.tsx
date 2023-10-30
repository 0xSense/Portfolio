import { Outlet } from 'react-router-dom';
import './root.scss';
import Banner from '../components/Banner/index';
import Footer from '../components/Footer/index';
import Carousel from '../pages/Carousel';
import About from '../pages/AboutSection';

export default function Root() {
  return (
    <>
      <div className={"AppComponent"}>
        <Banner />
        <div className={"CenterComponent"}>
          <About />
          <Carousel />
        </div>
        <Footer />
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}