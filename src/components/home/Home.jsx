import React from 'react'
import Data from './Data'
import "./home.css"
import Ban_web from './Banweb'

const Home = () => {
  return (
    <section className="home section" id='home'>
      <div className="home__container container grid">
        <div className="home__content grid ">
          <Ban_web />

          <div className="home__img"></div>

          <Data />
        </div>
      </div>
    </section>
  )
}

export default Home
