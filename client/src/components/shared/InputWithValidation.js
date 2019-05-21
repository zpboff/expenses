import React from 'react'
import classnames from 'classnames'

export default function InputWithValidation(props) {   
    const { field, value, error, label, type, onChange } = props;         
    return (
        <>
            <input
                id={field}
                name={field}
                type={type}
                className={classnames("validate", {
                    'invalid': !!error
                })}
                value={value}
                onChange={onChange}
            />
            <label htmlFor={field}>{label}</label>
            {
                error && (
                    <span className="helper-text red lighten-1">
                        {error}
                    </span>
                )
            }
        </>
    )
}