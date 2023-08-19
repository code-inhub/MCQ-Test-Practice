import React from 'react'

function Home({data}) {

  return (
    <div>
     {data.map((item)=>(
 
          <div key={item._id}>
            <h1>{item.questions}</h1>
            {/* <h2>{item.ans}</h2> */}
          </div>
        )
      
     )}

    </div>
  )
}

export default Home
