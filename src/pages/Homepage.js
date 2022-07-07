import React from 'react'
import HeaderComponent from '../components/smart/HeaderComponent';
import Seperator from '../components/dumb/seperator/Seperator';
import JumboComponent from '../components/dumb/jumbo/jumboComponent/JumboComponent';
import AccordionComponent from '../components/dumb/accordion/accordionComponent/AccordionComponent';
import FooterComponent from '../components/dumb/footer/footerComponent/FooterComponent';
function Homepage() {
  return (
    <div>
      <>
       <HeaderComponent/>
       <Seperator/>
       <JumboComponent/>
       <AccordionComponent/>
       <Seperator/>
       <FooterComponent/>
        </>
    </div>
  )
}

export default Homepage