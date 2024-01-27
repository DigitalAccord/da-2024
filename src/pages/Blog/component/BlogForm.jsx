import React from 'react'
import './blog.scss'
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toast, { Toaster } from 'react-hot-toast';

export const BlogForm = ({ status, message, onValidated }) => {
  let email
  const checkIfEmailIsDuplicate = (email) => {
    try {

      const subscribedEmails = JSON.parse(localStorage.getItem('subscribedEmails')) || [];


      const isDuplicate = subscribedEmails.includes(email);

      return isDuplicate;
    } catch (error) {
      console.error('Error checking duplicate email:', error);

      return false;
    }
  };

  const addToSubscribedEmails = (email) => {
    try {

      const subscribedEmails = JSON.parse(localStorage.getItem('subscribedEmails')) || [];


      subscribedEmails.push(email);


      localStorage.setItem('subscribedEmails', JSON.stringify(subscribedEmails));
    } catch (error) {
      console.error('Error adding email to subscribed list:', error);

    }
  };


  const submit = () => {

    if (email && email.value.indexOf('@') > -1) {
      const isDuplicateEmail = checkIfEmailIsDuplicate(email.value);

      if (isDuplicateEmail) {
        console.log("email is already used");
        toast.error('Email is already subscribe',

        );

      } else {
        onValidated({
          EMAIL: email.value,
        });
        addToSubscribedEmails(email.value);
        console.log("successfully subscribed");
        toast.success('successfully subscribed');
      }

    } else {
      console.log("enter a valid email");
      toast.error('Please enter the valid email');
    }
  };

  return (
    <>

      <div >
        <input
          ref={(node) => (email = node)}
          type="email"
          placeholder="Your email"
        />
        <br />
        <button onClick={submit} className='blog-subscribe'>Subscribe</button>

      </div>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          success: {
            style: {
              background: '#181D26',
              color:"white",
              fontSize:"20px",
              padding:"20px 15px",
              fontWeight:"500"
            },
          },
          error: {
            style: {
              background: '#181D26',
              color:"white",
              fontSize:"20px",
              padding:"20px 15px",
              fontWeight:"500"
            },
          },
        }}

      />
    </>
  )
}