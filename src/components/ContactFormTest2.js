import React from 'react';
import * as emailjs from 'emailjs-com';

import { Field, Label, Control, Input, Button, Textarea } from 'rbx';

class ContactFormTest2 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, subject, message } = this.state;
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Geoffrey',
      subject,
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

  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { name, email, subject, message, sentMessage } = this.state;

    return (
        <form className='contact-form'>
      <form onSubmit={this.handleSubmit}>
        <Field>
          <Label>Name</Label>
          <Control>
            <Input
              name="name"
              type="text"
              placeholder="Your first and last name"
              value={name}
              onChange={this.handleChange}
            />
          </Control>
        </Field>
        <Field>
          <Label>Email for contact</Label>
          <Control>
            <Input
              name="email"
              type="email"
              placeholder="email@gmail.com"
              value={email}
              onChange={this.handleChange}
            />
          </Control>
        </Field>
        <Field>
          <Label>Subject</Label>
          <Control>
            <Input
              name="subject"
              type="text"
              placeholder="What is the subject?"
              value={subject}
              onChange={this.handleChange}
            />
          </Control>
        </Field>
        <Field>
          <Label>Message</Label>
          <Control>
            <Textarea
              name="message"
              placeholder="Tell me more about..."
              value={message}
              onChange={this.handleChange}
            />
          </Control>
        </Field>

        <Field kind="group">
          <Control>
            <Button color="dark">Send</Button>
          </Control>
          <Control>
            <Button text>Cancel</Button>
          </Control>
        </Field>
      </form>
      </form>
    );
  }
}

export default ContactFormTest2;