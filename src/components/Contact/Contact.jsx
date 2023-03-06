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
    padding: 1.6rem;
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 600px;
    label {
      font-size: 1.2rem;
      font-family: "Open Sans", sans-serif;
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
  font-family: "Montserrat", sans-serif; /* Change font to Montserrat */

  button {
    font-size: 14px;
    padding: 10px 20px;
    margin-top: 20px;
    background-color: #4caf50;
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
          <StyledConfirmationMessage>
            <p>Email sent!</p>
            <button onClick={() => setShowForm(true)}>Send another message</button>
          </StyledConfirmationMessage>
        )}
      </StyledContactForm>
    );
  };
  
  export default Contact;
  
  
  
  

