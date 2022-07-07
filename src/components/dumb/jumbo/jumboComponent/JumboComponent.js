import React from 'react';
import './JumboComponent.css';
import JumboItem from '../jumboItem/JumboItem';
import Separator from '../../seperator/Seperator';

function JumboComponent() {
    const data = [
        {
            'title': 'Enjoy on your TV.',
            'subheading': 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
            'imageSrc': 'images/home/home-imac.jpg'
        },
        {
            'title': 'Download your shows to watch offline.',
            'subheading': 'Save your favourites easily and always have something to watch.',
            'imageSrc': 'images/home/home-mobile.jpg'
        },
        {
            'title': 'Watch everywhere.',
            'subheading': 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
            'imageSrc': 'images/home/home-tv.jpg'
        },
        {
            'title': 'Create profiles for children.',
            'subheading': 'Send children on adventures with their favourite characters in a space made just for them—free with your membership.',
            'imageSrc': 'images/home/home-kids.png'
        }
    ]
    return (
        <div className='jumbo-component'>
            {data.map((item,index) => (
            <>
                <JumboItem alignment={index%2===0} title={item.title} subheading={item.subheading} imageSrc={item.imageSrc} />
                <Separator/>
                </>
            ))}

        </div>
    )
}

export default JumboComponent