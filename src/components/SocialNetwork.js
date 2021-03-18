import React from 'react'

function SocialNetwork() {

    return (
        <div className='social-network'>
            <ul className='content'>
                <a href='https://www.facebook.com/geoffrey.robelot' target='_blank'
                    rel='noopener noreferrer' className='hover'>
                    <li><i className='fab fa-facebook-f'></i></li>
                </a>

                <a href='https://www.twitter.com' target='_blank'
                    rel='noopener noreferrer' className='hover'>
                    <li><i className='fab fa-twitter'></i></li>
                </a>

                <a href='https://www.instagram.com/geoffrey_robelot/' target='_blank'
                    rel='noopener noreferrer' className='hover'>
                    <li><i className='fab fa-instagram'></i></li>
                </a>

                <a href='https://www.linkedin.com/in/geoffrey-robelot-a491b21b7/' target='_blank'
                    rel='noopener noreferrer' className='hover'>
                    <li><i className='fab fa-linkedin'></i></li>
                </a>

            </ul>
        </div>
    )
}

export default SocialNetwork
