import React from 'react'
import Main from '../components/main/Main'
import Row from '../components/row/Row'
import requests from '../request/Requests'

function Home() {
  return (
    <>
      <Main />
      <Row title='Upcoming' fetchUrl={requests.requestLatest}/>
      <Row title='Popular' fetchUrl={requests.requestPopular}/>
      <Row title='Top Rated' fetchUrl={requests.requestTopRated}/>
    </>
  )
}

export default Home
