import React from 'react'
import classNames from 'classnames'

export default function Input({ className, ...props }) {
    return (
        <input {...props} type="text" className={classNames({ [className]: className })} />
    )
}
