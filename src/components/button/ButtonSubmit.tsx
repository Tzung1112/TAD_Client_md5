import React from 'react';
import { PropsButtonSubmit } from '../../interface';
import "./buttonsubmit.scss"

const SubmitButton = (props:PropsButtonSubmit) => {
  const { onClick, label, className }=props
  return (
    <button type='submit' className={className} onClick={onClick}>
      {label}
    </button>
  );
}

export default SubmitButton;
