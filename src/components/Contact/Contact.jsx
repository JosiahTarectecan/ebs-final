import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { TextField, Button, Typography } from "@material-ui/core";
import AppFooter from '../Views/AppFooter'

const StyledMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  font-family: "Open Sans", sans-serif;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #ddd;
  margin: auto;
  width: 600px;
  height: 200px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  flex-direction: column;

  button {
    margin-top: 20px;
    background-color: #254ccc;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    cursor: pointer;

    &:hover {
      background-color: #00a0e9;
    }
  }
`;



const StyledContactForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .form {
    background-color: #fff;
    padding: 1.6rem;
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 600px;

    .MuiTypography-root {
      font-size: 1.2rem;
      font-family: "Open Sans", sans-serif;
      margin-top: 1rem;
      display: block;
    }

    .MuiTextField-root {
      width: 100%;
      margin-top: 1rem;
    }

    .MuiButton-root {
      width: 100%;
      margin-top: 1.5rem;
      padding: 1rem;
      background-color: #254ccc;
      color: #fff;
      border: none;
      border-radius: 0.5rem;
      font-size: 1.2rem;
      cursor: pointer;

      &:hover {
        background-color: #00a0e9;
      }
    }
  }
`;















const Contact = () => {
    const form = useRef();
    const [showForm, setShowForm] = useState(true);
  
    const sendEmail = (e) => {
      e.preventDefault();

      

      const userName = form.current.user_name.value.trim();
  const userEmail = form.current.user_email.value.trim();
  const message = form.current.message.value.trim();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!userName || !userEmail || !message || !emailRegex.test(userEmail)) {
    alert("Please fill in all the fields and enter a valid email address.");
    return;
  }

  const lastSentTimestamp = localStorage.getItem("lastSentTimestamp");
  const now = new Date().getTime();
  if (lastSentTimestamp && now - lastSentTimestamp < 30 * 60 * 1000) {
    const remainingTime = Math.ceil((30 * 60 * 1000 - (now - lastSentTimestamp)) / 1000 / 60);
    alert(`You can only send one message every 30 minutes. Please try again in ${remainingTime} minutes.`);
    return;
  }
  
      emailjs
        .sendForm(
          "service_h4mqnse",
          "template_jpbdxr9",
          form.current,
          "uSmdTlqLKqsYOfzEP"
        )
        .then(
          (result) => {
            console.log(result.text);
            setShowForm(false);
          },
          (error) => {
            console.log(error.text);
          }
        );
    };

    const handleNewMessageClick = () => {
      setShowForm(true);
    };
  

    
  
    return (
      <body>
      <div>
      {showForm ? (
      <StyledContactForm>
      <form ref={form} onSubmit={sendEmail} className="form">
      <Typography variant="h4" component="h2">
      Contact Me
      </Typography>
      <Typography variant="body1">
      Have a question about custom orders or refunds? Fill out the form below and I'll get back to you as soon as possible!
      </Typography>
      <TextField required id="user_name" name="user_name" label="Name" variant="outlined" />
      <TextField
                 required
                 id="user_email"
                 name="user_email"
                 label="Email"
                 variant="outlined"
                 type="email"
               />
      <TextField
                 required
                 id="message"
                 name="message"
                 label="Message"
                 variant="outlined"
                 multiline
                 rows={4}
               />
      <Button type="submit" variant="contained">
      Send Message
      </Button>
      </form>
      </StyledContactForm>
      ) : (
      <StyledMessage>
      Your message has been sent! Thank you for reaching out.
      <Button variant="contained" onClick={handleNewMessageClick}>
            Submit another message
          </Button>
      </StyledMessage>
      )}
      </div>
      <AppFooter/>
      </body>
      );
      };
      
      export default Contact;
      
      
      
      
  
  
  
  
  

