import React from 'react';
import "../components/EnquirePopUp.css";
import {FaWindowClose} from 'react-icons/fa'

export default function EnquirePopUp(props) {
  return (props.trigger) ? (
    <div className='popupForm'>
        <div className='popupForm-inner'>
            <button className='close-btn' onClick={() => props.setTrigger(false)}>
              <FaWindowClose/>
              </button>
            <br/>
            {props.children}

        </div>
    </div>
  ) : "";
}
