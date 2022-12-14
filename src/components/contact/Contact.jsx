import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_20jx34f",
      "template_8afmo7a",
      form.current,
      "MRqYgc9llFnAUBZ8P"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>hello@filipe-guedes.com</h5>
            <a
              href="mailto:hello@filipe-guedes.com
"
            >
              Send me an email
            </a>
          </article>
          <article className="contact__option">
            <SlSocialLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Filipe Guedes</h5>
            <a
              href="https://www.linkedin.com/in/filipe--guedes/"
              target="_blank"
              rel="noreferrer"
            >
              Send me a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="How can I help you?"
            rows="10"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
