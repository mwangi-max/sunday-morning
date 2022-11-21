import React from 'react';
import { buddies } from './persons';
import SinglePerson from './SinglePerson';

const App = () => {
 const [people,setPeople] = React.useState(buddies);
  return (
    <section>
     <article>
      <h2>Today {people.length} birthdays are on the card</h2>
      {
       people.map((buddy)=>{
        const {id,name,job,image} = buddy;
        return <SinglePerson key={id} {...buddy}/>
       })
      }
       
       <div className='btn'>
               <button onClick={()=>setPeople([])} className='click'>CLEAR ALL</button>
       </div>
      

     </article>
    </section>
  )
}

export default App
