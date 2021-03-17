import React from 'react';
import * as emailjs from 'emailjs-com';

class ContactFormTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          company: '',
          phone: '',
          email: '',
          message: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);

      }

      handleSubmit(event) {
        event.preventDefault();

        const { name, company, phone, email, message } = this.state;
        const templateParams = {
          from_name: name,
          from_company: company,
          from_phone: phone,
          from_email: email,
          to_name: 'Geoffrey',
          message_html: message,
        };
        emailjs.send(
          'gmail',
          'template_fw7q14v',
          templateParams,
          'user_kLDbFzq1nboup8oZ3wq9d'
        ) 

        this.resetForm();
      };

      resetForm(){
        this.setState({name: "", company:"", phone:"", email: "", message: ""})
      }

     render() {
       const { name, company, phone, email, message } = this.state;

       return(
        <form className='contact-form'>

            <h2>Contact</h2>

            <div className='form-content' onSubmit={this.handleSubmit.bind(this)} method="POST">
                <input type="text" id="name" name="name" placeholder="Nom *" required value={this.state.name} onChange={this.onNameChange.bind(this)} />
                <input type="text" id="company" name="company" placeholder="Société" value={this.state.company} onChange={this.onCompanyChange.bind(this)} />
                <input type="text" id="phone" name="phone" placeholder="Téléphone" value={this.state.phone} onChange={this.onPhoneChange.bind(this)} />
                <input type="email" id="email" placeholder="Email *" name="email" required value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                <textarea id="message" name="message" placeholder="Message *" required value={this.state.message} onChange={this.onMessageChange.bind(this)} />
            </div>

            <input className="button hover" type="submit" value="Envoyer" />
        </form>
    );
}


    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onCompanyChange(event) {
        this.setState({ company: event.target.value })
    }

    onPhoneChange(event) {
        this.setState({ phone: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }

}

export default ContactFormTest
