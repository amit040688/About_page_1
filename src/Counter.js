import CounterCardData from './CounterCardData'
import CounterCard from './CounterCard'

function Counter() {
  return (
    <div className='counter_cards pt-5 pb-3'>
    <div className='container'>
      
        <div className='row d-flex justify-content-between gy-3'>
            {
                CounterCardData.map((val,ind) =>{
return(
    <CounterCard
    key={ind}
    imgscr={val.imgsrc}
    counter={val.count}
    caption={val.cap}
    
    
    
    />
    

)

                })
            }



            </div>
            </div>
            </div>
  )
}

export default Counter