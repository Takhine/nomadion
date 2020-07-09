import React, {useEffect} from "react";
import { Events } from 'react-scroll';

// Components
import Header from './Header';
import About from './About';


export default function Home() {
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
    <div id="homepage">
      <Header />
      <About />
    </div>
  );
}
