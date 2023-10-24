import React from 'react'
import Card from './Card'
import CardData from './CardData'


function WorkCard() {
return (
<div className='work_cards py-5'>
<div className='container'>
    <h3 className='text-center'>Why work with us?</h3>
    <div className='row d-flex justify-content-between gy-3'>
        
        {
            CardData.map((val,ind) =>{
                  return(
                    <Card  
                    key={ind}
                    imgscr={val.imgsrc}
                    heading={val.title}
                    paragraph={val.para}
                    
                    
                    />
                  )
            })
        }
        
    </div>

</div>
</div>
)
}

export default WorkCard