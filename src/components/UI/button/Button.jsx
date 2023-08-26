import React from 'react'
import classNames from 'classnames'

const Button = ({ className, buttonText, ...props }) => {
    return (
        <button {...props} className={classNames({ [className]: className })} >{buttonText}</button>
    )
}

export default Button