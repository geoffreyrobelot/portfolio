import React from 'react';
import ButtonsBottom from '../components/ButtonsBottom';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import SocialNetwork from '../components/SocialNetwork';
import ContactForm from '../components/ContactForm';
import ContactFormTest from '../components/ContactFormTest';
import ContactFormTest2 from '../components/ContactFormTest2';


function Contact() {
    return (
        <main>
            <div className='contact'>
                <Navigation />
                <Logo />
                <ContactFormTest />
                <div className='contact-infos'>
                    <div className='address'>
                        <div className='content'>
                            <h4>Adresse</h4>
                            <p>Route de Versailles</p>
                            <p>Le Port-Marly</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <div className='content'>
                            <h4>Téléphone</h4>
                            <p>06 61 86 23 31</p>
                            {/* <CopyToClipboard text='0661862331' className='hover'>
                            <p style={{ cursor: 'pointer' }} className='clipboard' onClick={() => {
                                alert('Numéro de téléphone copié');
                            }}></p>
                        </CopyToClipboard> */}
                        </div>
                    </div>
                    <div className='email'>
                        <div className='content'>
                            <h4>Email</h4>
                            <p>geoffreyrobelot@gmail.com</p>
                        </div>
                    </div>
                    <SocialNetwork />
                    <div className='credits'>
                        <p>&copy; 2021 - www.geoffreyrobelot.com</p>
                    </div>
                </div>
                <ButtonsBottom left={'/project-4'} />
            </div>
        </main>
    )
}

export default Contact
