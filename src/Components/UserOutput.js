import React from 'react';
import './User.css';

const Output = (props) => {
  return (
    <div>
      <p class="User">
        This is a sample first paragraph.
        <br/>
        Your UserName is --> {props.user}
      </p>
      <p class="User">
        This is a sample second paragraph. Super cool.
        <br/>
        Your UserName is --> {props.user}        
      </p>
    </div>
  );
}

export default Output;