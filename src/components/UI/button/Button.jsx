import React, { forwardRef } from 'react'
import classNames from 'classnames'

const Button = forwardRef(({ className, buttonText, ...props }, ref) => {
    return (
        <button {...props} ref={ref} className={classNames({ [className]: className })} >{buttonText}</button>
    )
})

export default Button