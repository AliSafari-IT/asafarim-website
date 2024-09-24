// src/pages/Contact/index.tsx
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./contact.module.css";
import Layout from "@theme/Layout";


export const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();


  const handleChange = (e: any) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "message") {
      setMessage(e.target.value);
    }
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9m1uuup", "template_2ie8whg", form.current, {
        publicKey: "vVlEiwNEj0k6uzMt3",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message Sent, We will get back to you shortly!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("An error occurred, Please try again");
        }
      );
  };

  return (
    <Layout title={"Contact Us"} wrapperClassName={styles.wrapper}>
      <h1 className={styles.title}>Contact Us</h1>
      <main className={styles.main}>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <label className={styles.label}>Name</label>
          <input
            className={styles.inputUsername}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <label className={styles.label}>Email</label>
          <input
            className={styles.inputEmail}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <label className={styles.label}>Message</label>
          <textarea
            className={styles.inputMessage}
            name="message"
            value={message}
            onChange={handleChange}
          />
          <input className={styles.submitButton} type="submit" value="Send" />
        </form>
      </main>
    </Layout>
  );
};

export default ContactUs;
