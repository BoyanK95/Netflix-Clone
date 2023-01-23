import React from 'react'
import Main from '../components/main/Main'
import Row from '../components/row/Row'
import requests from '../request/Requests'

function Home() {
  return (
    <>
      <Main />
      <Row title='Upcoming' fetchURL={requests.requestLatest}/>
      <Row title='Popular' fetchURL={requests.requestPopular}/>
      <Row title='Top Rated' fetchURL={requests.requestTopRated}/>
    </>
  )
}

export default Home
