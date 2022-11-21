import React from 'react'

const SinglePerson = ({name,age,image,job}) => {
  return (
    <section>
     <article className='single'>
      <img src={image} alt={name} className='img'/>

      <div className='info'>
      <h4>{name}</h4>
      <h4>{age} Years Old</h4>
      <h4>{job}</h4>
      </div>
      
     </article>
    </section>
  )
}

export default SinglePerson
