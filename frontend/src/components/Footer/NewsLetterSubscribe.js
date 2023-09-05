import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import NewsLetterForm from './NewsLetterForm';

const NewsletterSubscribe = () => {

  //const MAILCHIMP_URL = process.env.REACT_MAILCHIMP_URL;

  return (
    <MailchimpSubscribe
      url="https://gmail.us21.list-manage.com/subscribe/post?u=376d5dcdeecd094c4efd1e419&amp;id=81de093c5e&amp;f_id=0096d3e1f0"
      render={ ( props ) => {
        const { subscribe, status, message } = props || {};
        return (
          <NewsLetterForm
            status={ status }
            message={ message }
            onValidated={ formData => subscribe( formData ) }
          />
        );
      } }
    />
  );
};

export default NewsletterSubscribe;