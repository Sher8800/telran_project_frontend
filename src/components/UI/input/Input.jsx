import React from 'react'
import classNames from 'classnames'

export default function Input({ className, ...props }) {
    return (
        <input {...props} className={classNames({ [className]: className })} />
    )
}
