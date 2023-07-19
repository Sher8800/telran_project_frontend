import React from 'react'

export default function Input({ className, onChange, placeholder }) {
    return (
        <>
            <input className={className} onChange={onChange} placeholder={placeholder} type="text" />
        </>
    )
}
