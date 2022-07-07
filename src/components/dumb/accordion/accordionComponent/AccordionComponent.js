import React, { useState } from 'react';
import './AccordionComponent.css';
import AccordionItem from '../accordionItem/AccordionItem';
import AccordionText from '../accordionText/AccordionText';
import AccordionTitle from '../accordionTitle/AccordionTitle';
import SubscribeButton from '../../forms/subscribe/SubscribeButton/SubscribeButton';
import SubscribeEmail from '../../forms/subscribe/SubscribeEmail/SubscribeEmail';
import SubscribeWrapper from '../../forms/subscribe/SubscribeWrapper/SubscribeWrapper';

const data = [
  {
    "id": 1,
    "title": "What is Netflix ?",
    "text": "Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more – on thousands of internet-connected devices.'\n' + You can watch as much as you want, whenever you want, without a single advert – all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!"
  },
  {
    "id": 2,
    "title": "How much does it cost ?",
    "text": "Watch Netflix on your smartphone, tablet, smart TV, laptop or streaming device, all for one low fixed monthly fee. Plans start from £5.99 a month. No extra costs or contracts."
  },
  {
    "id": 3,
    "title": "Where can I watch ?",
    "text": "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.\n\nYou can also download your favourite programmes with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
  },
  {
    "id": 4,
    "title": "How do I cancel ?",
    "text": "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account at any time."
  },
  {
    "id": 5,
    "title": "What can I watch ?",
    "text": "Netflix has an extensive library of feature films, documentaries, TV programmes, anime, award-winning Netflix originals, and more. Watch as much as you want, any time you want."
  }
];
function AccordionComponent({ children, ...restProps }) {
  const [accordionState, setAccordionState] = useState(data.map(() => false));
  return (
    <div className='accordion-component' {...restProps}>
      <h1 className='accordion-heading'>Frequently Asked Questions</h1>
      <div className='accordion-wrapper'>
        {
          data.map((item, index) => (
            <AccordionItem>
              <AccordionTitle isOpen={accordionState[index]} handleClick={() => {
                let currentValue = accordionState[index];
                let newValue = !currentValue;
                let newaccordionState = [...accordionState];
                for (let i = 0; i < accordionState.length; i++) {
                  newaccordionState[i] = false;
                }
                newaccordionState[index] = newValue;
                setAccordionState(newaccordionState);
              }}>
                {item.title}
              </AccordionTitle>
              <AccordionText isOpen={accordionState[index]}>
                {item.text}
              </AccordionText>
            </AccordionItem>
          ))
        }
        <div className='btm-sec'>
          <h3 className='bottom-text'>Ready to watch? Enter your email to create or restart your membership.</h3>
          <SubscribeWrapper>
            <SubscribeEmail type='email' />
            <SubscribeButton >Get Started</SubscribeButton>
          </SubscribeWrapper>
        </div>
      </div>
    </div>
  )
}

export default AccordionComponent