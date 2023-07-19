import React from 'react'

export default function Button({ className, onClick, buttonText }) {
    return (
        <>
            <button className={className} onClick={onClick}>{buttonText}</button>
        </>
    )
}
