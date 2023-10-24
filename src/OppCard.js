import React from 'react'
import brand from './Images/image 26.png'


function OppCard() {
  return (
    <div className='col-lg-4 col-md-6 col-sm-12'>
    <div className='opp_card'>
        <div className='first_row'>
            <div className='duration'>Full time</div>
            <div className='side_img'>
                <img src={brand} alt={brand}/>
            </div>
        </div>
        <div className='second_row'>
            <h5 className='job_title'>Mechanical Engineer</h5>
            <span className='com_name'>Atlas Copco</span>
        </div>
        <div className='third_row'>
            <span className='job_details'> 
            <span className='location'><i className="fa-solid fa-location-dot"></i> Pune</span>
            <span className='experience'><i className="fa-solid fa-briefcase"></i> 0 - 3 years</span>
            <span className='pakage'><i className="fa-solid fa-indian-rupee-sign"></i> 4k</span>
            <span className='time'><i className="fa-regular fa-clock"></i> 2hours ago</span>
            
            
            </span>
        </div>
        <div className='fourth_row'>
            <button className='view_detail'>View Details</button>
            <button className='apply_now'>Apply Now</button>
        </div>
   
    </div>


   
</div>
  )
}

export default OppCard