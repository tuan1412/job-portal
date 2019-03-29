import React from 'react'
import './style.css';
export default function Loading({ error }) {
    // TODO: tao comp cho error
    if (error) return <div>Some thing went wrong</div>
    return (
        <div className="lds-dual-ring"></div>
    )
}
