import React from 'react';
import './style.css'

const renderSelect = ({ input, meta, label, children }) =>{
    return (
        <div id='input-field'><select id="district_drop"   {...input}>
        {children}
    </select>
    <div className="errMsg">
    {meta.error && meta.touched &&
            <small>
                {meta.error}
            </small>}
    </div>
        </div>
    )
}

export default renderSelect