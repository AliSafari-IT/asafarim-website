// src/pages/Contact/index.tsx
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./contact.module.css";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import api from "@site/api";
import { IUser } from "@site/types/IUser";

export const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();
  const { siteConfig } = useDocusaurusContext();
  const [err, setErr] = React.useState(null);
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const getUsers = async () => {
        try {
            const response = await api.get("/users");
            setUsers(response.data);
        } catch (error) {
            setErr(error.message || "Unknown error occurred");
            console.error("Error fetching users data:", error);
        }
    };
    getUsers();
}, []);

  const handleChange = (e: any) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "message") {
      setMessage(e.target.value);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(name, email, message);
  };

  const handleReset = (e: any) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
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
      {err ? <p className={styles.error}>Failed to load users: {err}</p> : <p>Number of users: {users.length}</p>}
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
