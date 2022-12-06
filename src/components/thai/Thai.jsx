import React from 'react'
import { Helmet } from "react-helmet";
import { thaiData, thaiNav } from './Data';
import './thai.css'
import ThaiItems from './ThaiItems';

const Thai = () => {
  const TITLE = "กฎหมายมรดกไทย - Thai Inheritance Law";

  return (
    <section className="thai section" id="thai">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>

      <h2 className="section__title mt-8">กฎหมายมรดกไทย</h2>
      <span className="section__subtitle mt-10">Contact Us</span>

      {/* <Thais /> */}
      <div>
        <div className="thai__filters">
            {thaiNav.map((item, index) => {
                return <span className="thai__item" key={index}>{item.name}</span>
            })}
        </div>

        <div className="thai__container container grid">
            {thaiData.map((item) => {
                return <ThaiItems item={item} />
            })}
        </div>

    </div>
    </section>
  )
}

export default Thai