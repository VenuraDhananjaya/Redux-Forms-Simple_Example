import React from 'react';
import './style.css'

const renderInput = ({ input, field_type = "text", meta, label }) =>{
    return (
        <div id='input-field'>
        <input type={field_type} {...input} />
        <div>{meta.error && meta.touched &&
            <small>
                {meta.error}
            </small>}</div>
    </div>
    )
}

export default renderInput