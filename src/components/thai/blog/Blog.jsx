// import React, { useEffect, useState } from 'react'
// import { Helmet } from 'react-helmet';
// import { Link, useParams } from 'react-router-dom'
// import { thaiData } from '../Data';

// const Blog = () => {
//   const {title} = useParams();
//   const [blog, setBlog, content] = useState(null)

//   useEffect(() => {
//     let blog = thaiData.find(blog => blog.title === parseInt(title));

//     if(blog) {
//       setBlog(blog);
//       content(blog);
//     }
//   }, [])

//   return (
//     // <div>
//     //   <Link to='/thai'></Link>
//     // </div>
    
//     <section className="thai section" id="thai">
//       <Helmet>
//         <title>{item.title}</title>
//       </Helmet>
//       <div className="thai__container container grid">
//         <Link to='/thai'><i class="uil uil-arrow-circle-left thai__icon"></i> ย้อนกลับ | Go Back</Link>
//         <span className="section__subtitle">Category</span>
//         <h2 className="section__title -mt-[70px]">{item.title}</h2>

//         {/* <p>{item.content}</p> */}
//       </div>

//     </section>
//   )
// }

// export default Blog

import React from 'react'
// import { Link } from 'react-router-dom'

const Blog = ({item}) => {
  return (
    // <section className="blog section" id="blog" key={item.id}>
    //   <div className="thai__container container grid">
    //     <Link to='/thai'><i class="uil uil-arrow-circle-left thai__icon"></i> ย้อนกลับ | Go Back</Link>
        
    //     <span className="section__subtitle">Category</span>
    //     <h2 className="section__title -mt-[70px]">{item.title}</h2>
    //   </div>

    // </section>
    <>
      <div className="thai__card" key={item.id}>
            <h3 className="thai__title">{item.title}</h3>
      </div>
    </>
  )
}

export default Blog
