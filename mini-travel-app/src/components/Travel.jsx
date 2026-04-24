import React from 'react'

const Travel = ({travel}) => {
    return (
        <div className="card" 
        style={{ width: "18rem" }}>
            <img src={travel.image} 
            className="card-img-top" 
            alt="..." />
            <div className="card-body">
                <h5 className="card-title">
                    {travel.name}</h5>
                <p className="card-text">
                    {travel.info.slice(0, 120)}
                    {'...'}
                </p>
                <a href="#" 
                className="btn btn-primary">
                    Go somewhere</a>
            </div>
        </div>
    )
}

export default Travel