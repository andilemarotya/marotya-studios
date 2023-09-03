import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import NewsLetterForm from './NewsLetterForm';

const NewsletterSubscribe = () => {

  const MAILCHIMP_URL = process.env.REACT_MAILCHIMP_URL;

  return (
    <MailchimpSubscribe
      url={ MAILCHIMP_URL }
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