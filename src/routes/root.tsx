import Banner from '../components/Banner/index';
import AboutMe from '../components/AboutMe';
import Resume from '../components/Resume';
import Projects from '../components/Projects';
import { Outlet } from 'react-router-dom';
import './root.scss';

export default function Root() {
  return (
    <>
      <div className={"AppComponent"}>
        <Banner />
        <div className={"CenterComponent"}>
          <AboutMe />
          <Resume />
          <Projects />
        </div>
        {/* <Footer /> */}
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}