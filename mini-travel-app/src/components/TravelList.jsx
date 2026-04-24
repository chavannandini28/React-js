import React from 'react'
import Travel from './Travel'

const TravelList = ({ dt }) => {
    console.log(dt)
    return (
        <section>
            <div className='container bg-secondary'>
                <div className="row">
                    {dt.map((travel, i) => (
                        <div 
                        className="col-12 col-md-6 col-lg-3 mr-1 mb-1"
                         key={travel.id}>
                            <Travel travel={travel} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TravelList