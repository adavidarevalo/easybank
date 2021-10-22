import React from 'react'
import { Articles } from '../data'
import '../styles/LatestArticles.scss'

const LatestArticles = () => {
    return(
        <section className='LatestArticlesContainer'>
            <h2>Latest Articles</h2>
            <div className='ConatinerFlex'>
                {Articles.map(item => 
                    <div className='ElementContainer'>
                        <img src={item.image} alt='PictureContainer'/>
                        <div>
                            <p>By {item.creator}</p>
                            <h3>{item.title}</h3>
                            <p>{item.paragraph}</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default LatestArticles