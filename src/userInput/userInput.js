import React from 'react';

const userInput = (props) => {
  return (
    <div>
      <input type="text" onChange={props.changed} />
      <p>Ten tekst ma {props.text.length} liter. </p>
    </div>
)
}
export default userInput;
