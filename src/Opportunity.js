import React from 'react'
import OppCard from './OppCard'
import OppCardData from './OppCardData'

function Opportunity() {
    return (
        <div className='opp_cards pt-5 pb-3'>
            <div className='container'>
                <h3 className='text-center'>Explore the Opportunities</h3>
                <p>At Internshala, every idea has an exponential influence because when you work with us, you work for millions of users. Ready to create a difference? Apply now!</p>
                <div className='row d-flex justify-content-between gy-3'>
                    {
                        OppCardData.map((val, ind) => {
                            return (
                                <OppCard
                                    key={ind}
                                    time={val.time}
                                    imgscr={val.imgsrc}
                                    heading={val.title}
                                    company={val.com}
                                    viewbtn={val.vbutton}
                                    applybtn={val.appbutton}
                                />
                            )


                        })
                    }
                    <a href='#' className='view_more'>View more <i className="fa-solid fa-chevron-right"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Opportunity