import React from 'react'
import '../styles/Principal.scss'
import phones from '../images/phones.png'

const Principal = () => {
    return(
        <section className='PrincipalContainer'>
            <div className='Image'>
                <img src={phones} alt='hone'/>
            </div>
            <div className='TextContainer'>
                <h2>Next generation digital banking</h2>
                <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                <button className='ButtonStyle'>Request Invite</button>
            </div>
        </section>
    )
}

export default Principal