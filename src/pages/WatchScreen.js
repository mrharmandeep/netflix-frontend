import React from 'react';
import Banner from '../components/banner/Banner';
import Nav from '../components/navbar/Nav';
import requests from '../api/Requests';
import Row from '../components/row/Row';
import FooterComponent from '../components/dumb/footer/footerComponent/FooterComponent';

function WatchScreen() {
  return (
    <div className='watchScreen'>
      <Nav />
      <Banner />
      <Row
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow />
      <Row
        title='Trending Now'
        fetchUrl={requests.fetchTrending} />
      <Row
        title='Top Rated'
        fetchUrl={requests.fetchTopRated} />
      <Row
        title='Action Movies'
        fetchUrl={requests.fetchActionMovies} />
      <Row
        title='Comedy Movies'
        fetchUrl={requests.fetchComedyMovies} />
      <Row
        title='Horror Movies'
        fetchUrl={requests.fetchHorroMovies} />
      <Row
        title='Romance Movies'
        fetchUrl={requests.fetchRomanticMovies} />
      <Row
        title='Documentaries'
        fetchUrl={requests.fetchDocumentries} />
      <FooterComponent/>
    </div>
  )
}

export default WatchScreen