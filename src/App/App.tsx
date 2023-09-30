import * as React from 'react';
import Banner from '../components/Banner/index.tsx';
import Card from '../components/Card/index.tsx';
import Footer from '../components/Footer/index.tsx';
import './App.scss';

const App = () => {
  return (
    <>
      <div className={"AppComponent"}>
        <Banner />
        <Card />
        <Footer />
      </div>
    </>
  );
};

export default App;
