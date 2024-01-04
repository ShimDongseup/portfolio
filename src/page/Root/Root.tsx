import React from 'react';
import claases from './root.module.scss';
import About from '../../component/About/About';
import Portfolio from '../../component/Portfolio/Portfolio';
import Script from '../../component/Script/Script';
import Contact from '../../component/contact/Contact';
import Nav from '../../component/Nav/Nav';
import Footer from '../../component/Footer/Footer';

const Root = () => {
  return (
    <>
      <Nav />
      <div className={claases.wrapRoot}>배경이 될 루트페이지!!!!!!!!!</div>
      <About />
      <Portfolio />
      <Script />
      <Contact />
      <Footer />
    </>
  );
};

export default Root;
