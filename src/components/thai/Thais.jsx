import React from 'react'
import { Link } from 'react-router-dom'
import { thaiNav, thaiData } from './Data'
import ThaiItems from './ThaiItems'
  
export async function getStaticProps() {
  // Get file from the posts(articles) directory

}

const Thais = ({item}) => {
  return (
    <div>
        <div className="thai__filters">
            {thaiNav.map((item, index) => {
                return <span className="thai__item" key={index}>{item.name}</span>
            })}
        </div>

        <div className="thai__container container grid">
            {thaiData.map((item) => {
                return <ThaiItems item={item} key={item.id} />
            })}
        </div>

    </div>
  )
}

export default Thais