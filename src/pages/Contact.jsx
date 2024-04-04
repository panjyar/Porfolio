import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import useAlert from '../hookes/useAlert';
import Alert from '../components/Alert';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const {alert, showAlert, hideAlert } = useAlert();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("public", import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Pradip",
        from_email: form.email,
        to_email: 'pra9487@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      setForm({ name: '', email: '', message: '' });

      showAlert({show:true , text: 'I recived your message successfully!', type: 'success'})
    }).catch((error) => {
      setIsLoading(false);
      console.log(error);
      showAlert({show:true , text: 'I dint recived your message!', type: 'danger'})
    });
  };

  const handleFocus = () => {};
  const handleBlur = () => {};

  return (
    <section className="realtive flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert}/>}
      
      <div className="flex-1 min-w-[50] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >

          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="xyz@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <input
              type="text"
              name="message"
              className="input"
              placeholder="Let me know how I can help you!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type='submit'
            className="btn"
            disabled={isLoading}
          >
            {isLoading ? 'sending...' : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
