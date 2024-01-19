import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { BlogForm } from '../pages/Blog/component/BlogForm';

const CustomForm = ({ status, message, onValidated }) => {
  let email;

  const submit = () => {
    if (email && email.value.indexOf('@') > -1) {
      onValidated({
        EMAIL: email.value,
      });
    }
  };

  return (
    <div>
      <input
        ref={(node) => (email = node)}
        type="email"
        placeholder="Your email"
      />
      <br />
      <button onClick={submit}>Subscribe</button>
      {status === 'sending' && <div style={{ color: 'blue' }}>Sending...</div>}
      {status === 'error' && (
        <div
          style={{ color: 'red' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === 'success' && (
        <div style={{ color: 'green' }}>Subscribed!</div>
      )}
    </div>
  );
};

const SubscribeForm = () => {
  const url = `https://gmail.us21.list-manage.com/subscribe/post?u=cb626cea98716e42cf66935c2&id=736ae7fda0&f_id=00eff3e6f0`;

  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <BlogForm
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  );
};

export default SubscribeForm;
