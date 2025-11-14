// src/Components/Alert.js
import React from 'react';

export default function Alert(props) {
  // Only render when props.alert has a truthy value
if (!props.alert || !props.alert.msg) return null;


  const capitalize = (word) => {
    if (!word) return "";
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  } 
  
  return (
    <div style={{height: '50px'}}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{ capitalize(props.alert.type)}</strong>: {props.alert.msg}
    </div>}
    </div>
   
  );
}
