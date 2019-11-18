import React from 'react';
import './style.css'

const renderInput = ({ input, id, field_type = "text", meta, label }) =>{
    return (
        <div id='input-field'>
        <input type={field_type} id={id} {...input} />
        <div className="errMsg">{meta.error && meta.touched &&
            <small>
                {meta.error}
            </small>}</div>
    </div>
    )
}

export default renderInput