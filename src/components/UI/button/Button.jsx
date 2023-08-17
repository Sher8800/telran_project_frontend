import React from 'react'
import classNames from 'classnames'

export default function Button({ className, buttonText, ...props }) {
    return (
        <button {...props} className={classNames({ [className]: className })} >{buttonText}</button>
    )
}
