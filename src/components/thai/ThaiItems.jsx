import React from 'react'
// import { Link } from 'react-router-dom'

const ThaiItems = ({item}) => {
  return (

    <>
        <div className="thai__card" key={item.id}>
            <h3 className="thai__title">{item.title}</h3>
            <span className="thai__description">{item.description}</span>

            <div className="thai__button">
                <a href={`/thai/${item.title}`}>
                    เพิ่มเติม <i className="bx bx-right-arrow-alt thai__button-icon"></i>
                </a>
            </div>
        </div>
    </>
    
  )
}

export default ThaiItems