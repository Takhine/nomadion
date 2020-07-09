import React, {useEffect} from "react";
import { Events } from 'react-scroll';
import {BackTop} from 'antd';

// Components
import Header from "./Header";
import Expertise from "./Expertise";
import Partners from "./Partners";
import Process from "./Process";
// Images
import pointer from 'static/images/icons/pointer.svg'


export default function Services() {
  useEffect(() => {
    Events.scrollEvent.register('begin', function(to, element) {
      });
   
      Events.scrollEvent.register('end', function(to, element) {
      });
   

      return()=>{
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
      }
}, [])
  return (
    <div id="services-page">
      <Header />
      <Expertise />
      <Partners />
      <Process />
      <BackTop>
      <div className="back-to-top"><img src={pointer} alt="Back to Top" /></div>
    </BackTop>
    </div>
  );
}
