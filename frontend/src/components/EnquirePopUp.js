import React from 'react';
import "../components/EnquirePopUp.css";


export default function EnquirePopUp(props) {
  return (props.trigger) ? (
    <div className='popupForm'>
        <div className='popupForm-inner'>
            <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button>
            <br/>
            {props.children}

        </div>
    </div>
  ) : "";
}
