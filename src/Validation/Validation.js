import React from 'react';

const validation = (props) => {
  if (props.text.length > 4){
  return (
    <div>
      <p>Text long enough.</p>
    </div>
  )
} else {
  return (
    <div>
      <p>Text too short!</p>
    </div>
  )
}
}
export default validation;
