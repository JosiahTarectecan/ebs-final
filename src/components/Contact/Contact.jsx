import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const StyledMessage = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
color: green;
font-size: 24px;
font-weight: bold;
font-family: "Open Sans", sans-serif;

`;

const StyledContactForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  form {
    background-color: #fff;
    padding: 1.5rem;
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 600px;
    label {
      font-size: 1.2rem;
      font-family: 'Open Sans', sans-serif;
      margin-top: 1rem;
      display: block;
    }
    input[type="text"],
    input[type="email"],
    textarea {
      width: 100%;
      padding: 0.5rem;
      margin-top: 1rem;
      font-size: 1.2rem;
      border-radius: 0.5rem;
      border: 1px solid #ccc;
    }
    textarea {
      height: 6rem;
      resize: none;
    }
    input[type="submit"] {
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

const StyledConfirmationMessage = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  padding: 20px;
  button {
    font-size: 14px;
    padding: 10px 20px;
    margin-top: 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
  }
`;






const Contact = () => {
    const form = useRef();
    const [showForm, setShowForm] = useState(true);
  
    const sendEmail = (e) => {
      e.preventDefault();
  
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
  
    return (
      <StyledContactForm>
        {showForm ? (
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        ) : (
          <StyledMessage>
            <p>Email sent!</p>
            <button onClick={() => setShowForm(true)}>Send another message</button>
          </StyledMessage>
        )}
      </StyledContactForm>
    );
  };
  
  export default Contact;
  
  
  
  

