import React from 'react'
import './FormInput.scss';
const FormInput = ({changeHandler, label, ...others})=>(
<div className="form-group">
<input  onChange={changeHandler} {...others}/>
{label?(
    <label htmlFor={others.id} id={others.id}  className={`form-label ${others.value.length?"shrink":""}`}>
        {label}
    </label>
):null}
</div>)

export default FormInput;