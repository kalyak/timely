import React, { Component } from "react";
import * as emailjs from "emailjs-com";
// import Layout from "../components/layout";
import {
  Button,
  FormFeedback,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
class ContactForm extends Component {
  state = {
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  };
  handleSubmit(e) {
    e.preventDefault();
    const { user_name, user_email, subject, message } = this.state;
    let templateParams = {
      user_name: user_name,
      user_email: user_email,
      subject: subject,
      message: message,
    };
    emailjs.send(
      "service_5tjm9qd",
      "template_yiqiofi",
      templateParams,
      "user_jRZz9U92oLPPeK0zvNDwp"
    );
    this.resetForm();
  }
  resetForm() {
    this.setState({
      user_name: "",
      user_email: "",
      subject: "",
      message: "",
    });
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };
  render() {
    return (
      <>
        <h1 className='p-heading1'>Get in Touch</h1>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup controlId='formBasicEmail'>
            <Label className='text-muted'>Email address</Label>
            <Input
              type='email'
              name='user_email'
              value={this.state.user_email}
              className='text-primary'
              onChange={this.handleChange.bind(this, "user_email")}
              placeholder='Enter email'
            />
          </FormGroup>
          <FormGroup controlId='formBasicName'>
            <Label className='text-muted'>Name</Label>
            <Input
              type='text'
              name='user_name'
              value={this.state.user_name}
              className='text-primary'
              onChange={this.handleChange.bind(this, "user_name")}
              placeholder='Name'
            />
          </FormGroup>
          <FormGroup controlId='formBasicSubject'>
            <Label className='text-muted'>Subject</Label>
            <Input
              type='text'
              name='subject'
              className='text-primary'
              value={this.state.subject}
              onChange={this.handleChange.bind(this, "subject")}
              placeholder='Subject'
            />
          </FormGroup>
          <FormGroup controlId='formBasicMessage'>
            <Label className='text-muted'>Message</Label>
            <Input
              type='textarea'
              name='message'
              className='text-primary'
              value={this.state.message}
              onChange={this.handleChange.bind(this, "message")}
            />
          </FormGroup>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </>
    );
  }
}
export default ContactForm;
