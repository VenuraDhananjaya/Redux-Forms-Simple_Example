import React from 'react'
import './style.css'

const renderLabel = ({ label }) =>{
    return (
        <div>
            <label className="label-style">{label}</label>
        </div>
    )
}

export default renderLabel