import React, {useState} from 'react';

import { sanitize } from '../../utils/miscellaneous';
import Loading from '../loading';

const NewsLetterForm = ({status, message, onValidated}) => {

  const [ error, setError ] = useState(null);
  const [ email, setEmail ] = useState(null);


  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {

    setError(null);

    if ( ! email ) {
      setError( 'Please enter a valid email address' );
      return null;
    }
    

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  }

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = ( event ) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  }

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if ( !message ) {
      return null;
    }
    const result = message?.split('-') ?? null;
    if ( "0" !== result?.[0]?.trim() ) {
      return sanitize(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? sanitize( formattedMessage ) : null;
  }

  return (
    <div>
        <div className="email">
            <input
            onChange={(event) => setEmail(event?.target?.value ?? '')}
            className="fill"
            placeholder="Enter email"
            name="sub_email"
            onKeyUp={(event) => handleInputKeyEvent(event)}         
            />
            <button className="btn-sub" type="submit" onClick={handleFormSubmit}>
                Subscribe
            </button>
        </div>
        <div className="min-h-42px">
          { 'sending' === status ? <Loading  message="Sending..." contentColorClass="text-white" hasVisibilityToggle={false}/> : null }
          {'error' === status || error ? (
          <div
              className="text-red-700 pt-2"
              dangerouslySetInnerHTML={{ __html: error || getMessage( message ) }}
          />
          ) : null }
          {'success' === status && 'error' !== status && !error && (
              <div className="text-green-200 font-bold pt-2" dangerouslySetInnerHTML={{ __html: sanitize(message) }} />
          )}
        </div>

    </div>
  )
}

export default NewsLetterForm;