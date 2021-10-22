import React from 'react'
import '../styles/WhyChooseEasybank.scss'
import ChooseElements from './ChooseElements'
import {Elements} from '../data'

const WhyChooseEasybank = () => {
    return(
        <section className='ChooseContainer'>
            <h2>Why choose Easybank?</h2>
            <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
            <div className='FlexContainer'>
                {Elements.map(item => <ChooseElements item={item}/>)}
            </div>
        </section>
    )
}

export default WhyChooseEasybank