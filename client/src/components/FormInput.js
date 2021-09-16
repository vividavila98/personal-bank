import React from 'react'

export default function FormInput(props) {
    const {type, placeholder, name, value, handleChange} = props;

    return (
            <input 
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={handleChange}
            />
    )
}
