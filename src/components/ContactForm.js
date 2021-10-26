import React from 'react';
import { useState } from 'react';


const ContactForm = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let nameS = document.getElementById('name');
    let company = document.getElementById('company');
    let emailS = document.getElementById('email');
    let messageS = document.getElementById('message');
    let formMess = document.querySelector('.form-message');

    const isEmail = () => {
      let isMail = document.getElementById('not-mail');
      let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if (email.match(regex)) {
        isMail.style.display = 'none';
        return true;
      } else {
        isMail.style.display = 'block';
        isMail.style.animation = 'dongle 1s';
        setTimeout(() => {
          isMail.style.animation = 'none';
        }, 1000);
        return false;
      }
    };

    if (name && isEmail() && message) {

      const templateId = "template_fw7q14v";
      

      nameS.classList.remove('red');
      emailS.classList.remove('red');
      messageS.classList.remove('red');

      sendFeedback(templateId, {
        name,
        company,
        phone,
        email,
        message,
      });

    } else {
      formMess.innerHTML = 'Merci de remplir correctement les champs requis *';
      formMess.style.background = 'rgb(253, 87, 87)';
      formMess.style.opacity = '1';

      if (!name) {
        nameS.classList.add('error');
      }
      if (!email) {
        emailS.classList.add('error');
      }
      if (!message) {
        messageS.classList.add('error');
      }
    }
  };

  const sendFeedback = (templateId) => {
    let formMess = document.querySelector('.form-message');

    const templateParams = {from_name: name,
      from_company: company,
      from_phone: phone,
      from_email: email,
      to_name: 'Geoffrey',
      message_html: message}

    const userID = 'user_kLDbFzq1nboup8oZ3wq9d';

    window.emailjs
      .send('gmail', templateId, templateParams, userID)
      .then((res) => {
        formMess.innerHTML =
          'Message envoyé ! Je reviens vers vous très rapidement';
        formMess.style.background = '#00c1ec';
        formMess.style.opacity = '1';

        document.getElementById('name').classList.remove('error');
        document.getElementById('email').classList.remove('error');
        document.getElementById('message').classList.remove('error');
        setName('');
        setCompany('');
        setPhone('');
        setEmail('');
        setMessage('');

        setTimeout(() => {
          formMess.style.opacity = '0';
        }, 5000);
      })
      .catch(
        (err) =>
          (formMess.innerHTML =
            'Une erreur s est produite, veuillez réessayer.')
      );
  };

  return (
<>

    <form className='contact-form'>
      <h2>Contact</h2>
      <div className='form-content'>
        <input
          type='text'
          id='name'
          name='name'
          required
          onChange={(e) => setName(e.target.value)}
          placeholder='Nom *'
          value={name}
        />
        <input
          type='text'
          id='company'
          name='company'
          onChange={(e) => setCompany(e.target.value)}
          placeholder='Société'
          value={company}
        />
        <input
          type='text'
          id='phone'
          name='phone'
          onChange={(e) => setPhone(e.target.value)}
          placeholder='Téléphone'
          value={phone}
        />
        <div className='email-content'>
          <label id='not-mail'>Email non valide</label>
          <input
            type='mail'
            id='email'
            name='email'
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email *'
            value={email}
          />
        </div>
        <textarea
          id='message'
          name='message'
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Message *'
          value={message}
          required
        />
      </div>
      <input
        className='button hover'
        type='submit'
        value='Envoyer'
        onClick={handleSubmit}
      />
      <div className='form-message'></div>
    </form>
    
</>

  );
};

export default ContactForm;