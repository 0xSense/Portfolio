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
        <div className={"banner"}>
          <div id="DeveloperName" >
              Nicholas Ashley
          </div>
          
          <div className={"DropIcon"}>
            <img src="src/assets/icons8-hamburger-50.png">

            </img>
          </div>
          
        </div>
      </div>
    </>
  );
}