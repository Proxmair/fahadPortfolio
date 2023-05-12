import React, { useRef, useState } from "react";
import axios from "axios";
import "./pages.css";
const Contact = () => {
  const form = useRef();
  const [resultDisplay, setresultDisplay] = useState("none");
  const [result, setresult] = useState("Loading...");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const contactFormHandler = async (e) => {
    e.preventDefault();
    setresultDisplay("flex");
    const config = { headers: { "Content-Type": "application/json" } };
    try {
      await axios.post(`/api/v1/message`, { name, email, message }, config);
      setresult(
        "Thank you for your time. I will get back to you shortly as possible."
      );
      setemail("");
      setname("");
      setmessage("");
    } catch (error) {
      setresult("Unable to send your message");
    }
  };
  return (
    <div id="Contact" className="page">
      <h3>let's have a chat</h3>
      <h1>Contact</h1>
      <p>
        You can contact me through this email mfahadkhan0028@gmail.com or by
        sending a message through this from{" "}
      </p>
      <form className="contact-form" ref={form} onSubmit={contactFormHandler}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={(e) => setname(e.target.value)}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email address"
            onChange={(e) => setemail(e.target.value)}
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            placeholder="Enter your message"
            required
            cols="30"
            rows="10"
            name="message"
            onChange={(e) => setmessage(e.target.value)}
          ></textarea>
          <button onClick={contactFormHandler}>
            Send
          </button>
        </div>
        <div style={{ display: `${resultDisplay}` }} className="from-result">
          <h3>{result}</h3>
        </div>
      </form>
    </div>
  );
};

export default Contact;
