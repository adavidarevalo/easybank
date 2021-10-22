import React from 'react'

const ChooseElements = ({item}) => {
    return(
        <div className='ChooseElement'>
            <img src={item.images} alt='Elements'/>
            <div>
                <h3>{item.title}</h3>
                <p>{item.paragraph}</p>
            </div>
        </div>
    )
}

export default ChooseElements