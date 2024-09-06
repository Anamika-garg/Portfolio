import React from 'react'

const Skillcard = ({img , skill}) => {
    return (
        <>
            <div key={skill} className="skill-card">
                <img className='skill-img' src={img} alt="" />
            </div>
        </>
    )
}

export default Skillcard