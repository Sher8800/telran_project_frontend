import React, { forwardRef } from 'react'
import classNames from 'classnames'

const Input = forwardRef(({ className, ...props }, ref) => {
    return (
        <input {...props} ref={ref} className={classNames({ [className]: className })} />
    )
})

export default Input
