import React from 'react'
import classnames from 'classnames'

export default function InputWithValidation() {   
    const { field, value, errors, label } = this.props; 
    return (
        <>
            <input
                id={field}
                name={field}
                type="text"
                className={classnames("validate", {
                    'invalid': errors[field]
                })}
                value={value}
                onChange={this.handleInputChange}
            />
            <label htmlFor={field}>{label}</label>
            {
                errors[field] && (
                    <span className="helper-text red lighten-1">
                        {errors[field]}
                    </span>
                )
            }
        </>
    )
}