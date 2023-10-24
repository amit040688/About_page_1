import React from 'react'


function CounterCard(props) {
  return (
   <div className='col-lg-3 col-md-6 col-sm-12'>
    <div className='counter_card'>

        <div className='counter_icon'>
      <img src={props.imgscr} alt={props.imgscr}/>

        </div>
        <div className='counter_text'>
        <h2 className="number"><span className="counter">{props.counter}</span></h2>
<span className="caption">{props.caption}</span>
        </div>
    </div>


   </div>
  )
}

export default CounterCard