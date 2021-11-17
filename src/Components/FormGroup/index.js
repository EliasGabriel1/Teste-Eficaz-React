import React from 'react';


export default function FormGroup(props) {
    return (
      <>
        <div className="form-group">
            <label for={props.id}>{props.value} </label>
            <input type={props.type} id={props.id} placeholder={props.placeholder} onKeyPress={props.funcao} required />
        </div>
      </>
    );
  }
  