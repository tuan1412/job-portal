import React from 'react'
import './style.css';
export default function Loading({ error }) {
    if (error) return <div>Some thing went wrong</div>
    return (
        <div className="loading-container">
            <div className="lds-dual-ring"></div>
        </div>
    )
}
