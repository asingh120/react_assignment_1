import React from 'react';
import './User.css';

const Input = (props) => {
  return (
    <div>
      <input type="text" placeholder="Please Enter Text Here" onClick={props.click} onChange={props.change} value={props.username} />
    </div>
  );
}

export default Input;
