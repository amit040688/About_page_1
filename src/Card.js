import React from 'react'
function Card(props) {
  return (
    <div className='col-lg-4 col-md-6 col-sm-12'>
    <div className='card_area'>
        <div className='icon d-flex align-items-center'>
            <img  src={props.imgscr} alt={props.imgscr}/>
            <h4 className='pl-3'>{props.heading}</h4>
        </div>
        <div className='text'>
        <p>{props.paragraph}</p>
        </div>
    </div>


   
</div>
  )
}

export default Card