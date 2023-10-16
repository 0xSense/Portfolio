import Banner from '../components/Banner/index';
import Card from '../components/Card/index';
import Footer from '../components/Footer/index';
import { Outlet } from 'react-router-dom';
import './root.scss';

export default function Root() {
  return (
    <>
      <div className={"AppComponent"}>
        <Banner />
        <div className={"CenterComponent"}>
          <Card />
        </div>
        <Footer />
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}