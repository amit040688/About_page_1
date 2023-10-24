import React from 'react'
import web from './Images/Rectangle 2047-1.png'

function Banner() {
    return (

        <div className='about_banner py-5'>
            <div className='container'>

                <div className='row mx-auto img-fluid align-items-center'>
                    <div className='col-lg-7 col-md-6 col-sm-12 '>
                    <div className='about_banner_left'>
                      <p className='mb-0'>ABOUT</p>
                      <h1>Career Opportunity</h1>
                      </div>
                    </div>
                    <div className='col-lg-5 col-md-6 col-sm-12 '>
                        <div className='about_banner_right'>
                        <img src={web} alt={web} className='row ml-auto img-fluid' />
                        </div>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default Banner